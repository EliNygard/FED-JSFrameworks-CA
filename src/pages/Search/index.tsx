import { baseUrl } from "@/api/Constants";
import ErrorBoundary from "@/components/ErrorBoundary";
import LoadingCard from "@/components/loaders/LoadingCard";
import ProductCard from "@/components/ProductCard";
import { useFetch } from "@/hooks/useFetch";
import { IProduct } from "@/interface";
import React from "react";
import { Helmet } from "react-helmet-async";

interface SearchProps {
  searchTerm: string;
}
export const Search: React.FC<SearchProps> = ({ searchTerm }) => {
  const { data, isLoading, isError } = useFetch<IProduct[]>(baseUrl);

  if (isLoading || !data) {
    return <LoadingCard />;
  }

  if (isError) {
    return <div>Could not get products</div>;
  }

  const searchResult = data.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.tags?.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );

  if (searchResult.length === 0) {
    return (
      <>
        <p>Unfortunately we do not have what you are looking for.</p>
        <p>Try a new search. Perhaps we have something else you might like.</p>
      </>
    );
  }

  console.log(searchResult);
  const searchResultNumber = searchResult.length;
  console.log(searchResultNumber);

  return (
    <>
      <Helmet>
        <title>Infinite Finds - Search</title>
        <meta name="description" content="Infinite Finds - search" />
      </Helmet>
      <h2>{`Display ${searchResultNumber} products for "${searchTerm}"`}</h2>
      <ul>
        {searchResult.map((product) => (
          <li key={product.id} className="mb-3">
            <ErrorBoundary
              fallback={<p>Could not display the product. Please try again.</p>}
            >
              <ProductCard product={product} />
            </ErrorBoundary>
          </li>
        ))}
      </ul>
    </>
  );
};
