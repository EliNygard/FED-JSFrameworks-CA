import React from "react";
import ErrorBoundary from "@/components/ErrorBoundary";
import ProductCard from "@/components/ProductCard";
import { IProduct, SearchProps } from "@/interface";
import * as S from "../../components/ProductsList/index.styles";
import LoadingHomePage from "@/components/loaders/LoadingHomePage";
import { Helmet } from "react-helmet-async";
import SearchBar from "@/components/SearchBar";
import FilterNav from "@/components/FilterNav";

const Sale: React.FC<
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
  const itemsOnSale = sortedData.filter(
    (product) => product.discountedPrice < product.price,
  );

  return isLoading || !data ? (
    <LoadingHomePage />
  ) : isError ? (
    <div>Could not get products. Please try agian</div>
  ) : (
    <>
      <Helmet>
        <title>Infinite Finds - On Sale</title>
        <meta name="description" content="Products on sale" />
      </Helmet>
      <div className="max-w-7xl m-auto">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          data={data}
          isLoading={isLoading}
          isError={isError}
        />
        <div className="font-montserrat flex flex-col gap-3 my-8 sm:items-center">
          <h1 className="text-2xl sm:text-3xl uppercase">Sale</h1>
          <p className="text-lg sm:text-xl">
            The sale is on! Can you find a new favorite for a good price?
          </p>
        </div>
        <FilterNav setSortOption={setSortOption} />
        <S.Ul>
          {itemsOnSale.length > 0 ? (
            itemsOnSale.map((product) => (
              <li key={product.id} className="mb-3">
                <ErrorBoundary
                  fallback={
                    <p>Could not display the product. Please try again.</p>
                  }
                >
                  <ProductCard product={product} />
                </ErrorBoundary>
              </li>
            ))
          ) : (
            <p></p>
          )}
        </S.Ul>
      </div>
    </>
  );
};

export default Sale;
