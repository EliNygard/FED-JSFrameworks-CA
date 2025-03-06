import { baseUrl } from "@/api/Constants";
import LoadingProductPage from "@/components/loaders/LoadingProductPage";
import ProductDetails from "@/components/ProductDetails";
import SearchBar from "@/components/SearchBar";
import { useFetch } from "@/hooks/useFetch";
import { IProduct } from "@/interface";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

interface HomeProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const Product: React.FC<HomeProps> = ({ searchTerm, setSearchTerm }) => {
  const { id } = useParams();

  const { data, isLoading, isError } = useFetch<IProduct>(`${baseUrl}/${id}`);
  console.log(data);

  if (isLoading || !data) {
    return <LoadingProductPage />;
    // add new Loading here
  }

  if (isError) {
    return <div>Could not get products. Please try again.</div>;
  }

  return (
    <>
      <Helmet>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
      </Helmet>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProductDetails {...data} />
    </>
  );
};

export default Product;
