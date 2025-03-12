import React from "react";
import { Helmet } from "react-helmet-async";
import { useFetch } from "../../hooks/useFetch";
import ProductsList from "@/components/ProductsList";
import { IProduct, SearchProps } from "@/interface";
import { baseUrl } from "@/api/Constants";
import LoadingHomePage from "@/components/loaders/LoadingHomePage";
import SearchBar from "@/components/SearchBar";

const Home: React.FC<SearchProps> = ({ searchTerm, setSearchTerm }) => {
  const { data, isLoading, isError } = useFetch<IProduct[]>(baseUrl);

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
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      ></SearchBar>
      <section>
        <ProductsList data={data} />
      </section>
    </>
  );
};
export default Home;
