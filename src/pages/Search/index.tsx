import React, { useEffect } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";
import LoadingHomePage from "@/components/loaders/LoadingHomePage";
import ProductCard from "@/components/ProductCard";
import { IProduct, SearchProps } from "@/interface";
import { Helmet } from "react-helmet-async";
import * as S from "../../components/ProductsList/index.styles";
import SearchBar from "@/components/SearchBar";
import { useSearchParams } from "react-router-dom";

export const Search: React.FC<
  SearchProps & { data: IProduct[]; isLoading: boolean; isError: boolean }
> = ({ searchTerm, setSearchTerm, data, isLoading, isError }) => {
  const [searchParams] = useSearchParams();
  const searchParamTerm = searchParams.get("term") || "";

  useEffect(() => {
    console.log("performing search for: ", searchParamTerm);
    if (searchParamTerm !== searchTerm) {
      setSearchTerm(searchParamTerm);
    }
  }, [searchParamTerm]);

  if (isLoading || !data) {
    return <LoadingHomePage />;
  }

  if (isError) {
    return <div>Could not get products</div>;
  }

  const searchResult = data.filter(
    (product) =>
      product.title.toLowerCase().includes(searchParamTerm.toLowerCase()) ||
      product.description
        ?.toLowerCase()
        .includes(searchParamTerm.toLowerCase()) ||
      product.tags?.some((tag) =>
        tag.toLowerCase().includes(searchParamTerm.toLowerCase()),
      ),
  );

  const searchResultNumber = searchResult.length;

  return (
    <>
      <Helmet>
        <title>Infinite Finds - Search</title>
        <meta name="description" content="Infinite Finds - search" />
      </Helmet>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        data={data}
        isLoading={isLoading}
        isError={isError}
      />
      {searchResult.length === 0 ? (
        <>
          <p>Unfortunately we do not have what you are looking for.</p>
          <p>
            Try a new search. Perhaps we have something else you might like.
          </p>
        </>
      ) : (
        <>
          <h2>{`Display ${searchResultNumber} products for "${searchParamTerm}"`}</h2>
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
