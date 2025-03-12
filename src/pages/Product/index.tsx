import React from "react";
import { baseUrl } from "@/api/Constants";
import LoadingProductPage from "@/components/loaders/LoadingProductPage";
import ProductDetails from "@/components/ProductDetails";
import SearchBar from "@/components/SearchBar";
import { useFetch } from "@/hooks/useFetch";
import { IProduct, SearchProps } from "@/interface";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

interface ProductProps extends SearchProps {
  data: IProduct[];
  isLoading: boolean;
  isError: boolean;
}

const Product: React.FC<ProductProps> = ({
  searchTerm,
  setSearchTerm,
  data,
  isLoading: isProductsLoading,
  isError: isProductsError,
}) => {
  const { id } = useParams();
  const {
    data: product,
    isLoading,
    isError,
  } = useFetch<IProduct>(`${baseUrl}/${id}`);

  return isLoading || !product ? (
    <LoadingProductPage />
  ) : isError ? (
    <div>Could not get product. Please try again.</div>
  ) : (
    <>
      <Helmet>
        <title>{product.title}</title>
        <meta name="description" content={product.description} />
      </Helmet>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        data={data}
        isLoading={isProductsLoading}
        isError={isProductsError}
      />
      <ProductDetails {...product} />
    </>
  );
};

export default Product;
