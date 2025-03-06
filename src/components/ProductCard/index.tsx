import React from "react";
import { IProduct } from "@/interface";
import Button from "../Button";
import { Link } from "react-router-dom";
import ProductImage from "../productComponents/ProductImage";
import ProductPrice from "../productComponents/ProductPrice";
import ProductRating from "../productComponents/ProductRating";

export interface IProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  return (
    <>
      <Link to={`/product/${product.id}`}>
        <div className="relative h-[350px] max-h-[350px] w-full">
          <ProductImage product={product} />
        </div>
        <div className="mt-3 mb-4">
          <ProductRating product={product} />
        </div>
        <h3 className="uppercase font-montserrat">{product.title}</h3>
        <ProductPrice product={product} />
        <div className="">
          <Button>Add to cart</Button>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
