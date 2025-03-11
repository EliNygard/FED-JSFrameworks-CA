import React from "react";
import { IProductProps } from "@/interface";
import Button from "../Button";
import { Link } from "react-router-dom";
import ProductImage from "../productComponents/ProductImage";
import ProductPrice from "../productComponents/ProductPrice";
import ProductRating from "../productComponents/ProductRating";
import { useDispatch } from "react-redux";
import { addProduct } from "@/features/cart/cartSlice";

const ProductCard: React.FC<IProductProps> = ({ product }) => {
  const dispatch = useDispatch();

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
      </Link>
      <div className="">
        <Button onClick={() => dispatch(addProduct(product))}>
          Add to cart
        </Button>
      </div>
    </>
  );
};

export default ProductCard;
