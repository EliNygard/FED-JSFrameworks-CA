import React from "react";
import * as S from "./index.styles";
import ProductCard from "../ProductCard";
import ErrorBoundary from "../ErrorBoundary";
import { ProductsListProps } from "@/interface";

const ProductsList: React.FC<ProductsListProps> = ({ data }) => {
  return (
    <S.Ul>
      {data.map((product) => (
        <li key={product.id} className="mb-3">
          <ErrorBoundary
            fallback={<p>Could not display the product. Please try again.</p>}
          >
            <ProductCard product={product} />
          </ErrorBoundary>
        </li>
      ))}
    </S.Ul>
  );
};

export default ProductsList;
