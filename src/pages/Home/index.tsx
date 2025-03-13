import React from "react";
import { Helmet } from "react-helmet-async";
import ProductsList from "@/components/ProductsList";
import { IProduct, SearchProps } from "@/interface";
import LoadingHomePage from "@/components/loaders/LoadingHomePage";
import SearchBar from "@/components/SearchBar";
import FilterNav from "@/components/FilterNav";

const Home: React.FC<
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
  return isLoading || !data ? (
    <LoadingHomePage />
  ) : isError ? (
    <div>Could not get products. Please try again.</div>
  ) : (
    <>
      <Helmet>
        <title>Infinite Finds - Where Variety Never Ends</title>
        <meta name="description" content="Infinite Finds - home page" />
      </Helmet>
      <div className="max-w-7xl m-auto">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          data={data}
          isLoading={isLoading}
          isError={isError}
        ></SearchBar>
        <section className="mt-8">
          <FilterNav setSortOption={setSortOption} />
          <ProductsList data={sortedData} />
        </section>
      </div>
    </>
  );
};
export default Home;
