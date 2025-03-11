import { baseUrl } from "@/api/Constants";
import LoadingProductPage from "@/components/loaders/LoadingProductPage";
import ProductDetails from "@/components/ProductDetails";
import SearchBar from "@/components/SearchBar";
import { useFetch } from "@/hooks/useFetch";
import { IProduct, SearchProps } from "@/interface";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const Product: React.FC<SearchProps> = ({ searchTerm, setSearchTerm }) => {
  const { id } = useParams();
  const { data, isLoading, isError } = useFetch<IProduct>(`${baseUrl}/${id}`);

  return isLoading || !data ? (
    <LoadingProductPage />
  ) : isError ? (
    <div>Could not get product. Please try again.</div>
  ) : (
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
