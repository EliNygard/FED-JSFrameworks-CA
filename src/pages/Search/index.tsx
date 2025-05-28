import React, { useEffect } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";
import LoadingHomePage from "@/components/loaders/LoadingHomePage";
import ProductCard from "@/components/ProductCard";
import { IProduct, SearchProps } from "@/interface";
import { Helmet } from "react-helmet-async";
import * as S from "../../components/ProductsList/index.styles";
import SearchBar from "@/components/SearchBar";
import { useSearchParams } from "react-router-dom";
import FilterNav from "@/components/FilterNav";

export const Search: React.FC<
  SearchProps & {
    data: IProduct[];
    isLoading: boolean;
    isError: boolean;
    setSortOption: (option: string) => void;
    sortedData: IProduct[];
  }
> = ({
  searchTerm,
  setSearchTerm,
  data,
  isLoading,
  isError,
  setSortOption,
  sortedData,
}) => {
  const [searchParams] = useSearchParams();
  const searchParamTerm = searchParams.get("term") || "";

  useEffect(() => {
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

  const searchResult = sortedData.filter(
    (product) =>
      product.title.toLowerCase().includes(searchParamTerm.toLowerCase()) ||
      product.description
        ?.toLowerCase()
        .includes(searchParamTerm.toLowerCase()) ||
      product.tags?.some((tag) =>
        tag.toLowerCase().includes(searchParamTerm.toLowerCase())
      )
  );

  const searchResultNumber = searchResult.length;

  return (
    <>
      <Helmet>
        <title>Infinite Finds - Search</title>
        <meta name="description" content="Infinite Finds - search" />
      </Helmet>
      <div className="max-w-7xl m-auto">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          data={data}
          isLoading={isLoading}
          isError={isError}
        />
        <div className="mt-8">
          {searchResult.length === 0 ? (
            <div className="flex flex-col items-center gap-2 mt-10">
              <p>Unfortunately we do not have what you are looking for.</p>
              <p>
                Try a new search. Perhaps we have something else you might like.
              </p>
            </div>
          ) : (
            <section>
              <h2 className="mb-4">{`Display ${searchResultNumber} products for "${searchParamTerm}"`}</h2>
              <FilterNav setSortOption={setSortOption} />
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
            </section>
          )}
        </div>
      </div>
    </>
  );
};
