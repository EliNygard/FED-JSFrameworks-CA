import React from "react";
import { Helmet } from "react-helmet-async";
import { useFetch } from "../../hooks/useFetch";
import ProductsList from "@/components/ProductsList";
import { IProduct } from "@/interface";
import { baseUrl } from "@/api/Constants";
import LoadingCard from "@/components/loaders/LoadingCard";
import SearchBar from "@/components/SearchBar";

interface HomeProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const Home: React.FC<HomeProps> = ({ searchTerm, setSearchTerm }) => {
  const { data, isLoading, isError } = useFetch<IProduct[]>(baseUrl);
  console.log(data);

  if (isLoading || !data) {
    return <LoadingCard />;
  }

  if (isError) {
    return <div>Could not get products. Please try again.</div>;
  }

  return (
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
