import React from "react";
import { baseUrl } from "@/api/Constants";
import ErrorBoundary from "@/components/ErrorBoundary";
import LoadingCard from "@/components/loaders/LoadingCard";
import ProductCard from "@/components/ProductCard";
import { useFetch } from "@/hooks/useFetch";
import { IProduct, SearchProps } from "@/interface";
import { Helmet } from "react-helmet-async";
import * as S from "../../components/ProductsList/index.styles";
import SearchBar from "@/components/SearchBar";

export const Search: React.FC<SearchProps> = ({
  searchTerm,
  setSearchTerm,
}) => {
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

  const searchResultNumber = searchResult.length;

  return (
    <>
      <Helmet>
        <title>Infinite Finds - Search</title>
        <meta name="description" content="Infinite Finds - search" />
      </Helmet>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {searchResult.length === 0 ? (
        <>
          <p>Unfortunately we do not have what you are looking for.</p>
          <p>
            Try a new search. Perhaps we have something else you might like.
          </p>
        </>
      ) : (
        <>
          <h2>{`Display ${searchResultNumber} products for "${searchTerm}"`}</h2>
          <S.Ul>
            {searchResult.map((product) => (
              <li key={product.id} className="mb-3">
                <ErrorBoundary
                  fallback={
                    <p>Could not display the product. Please try again.</p>
                  }
                >
                  <ProductCard product={product} />
                </ErrorBoundary>
              </li>
            ))}
          </S.Ul>
        </>
      )}
    </>
  );
};
