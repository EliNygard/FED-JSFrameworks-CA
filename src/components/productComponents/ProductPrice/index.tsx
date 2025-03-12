import { IProductProps } from "@/interface";
import React from "react";

const ProductPrice: React.FC<IProductProps> = ({ product }) => {
  const { price, discountedPrice } = product;

  const priceElement =
    price > discountedPrice ? (
      <>
        <p className="text-primary">{`${discountedPrice} kr`}</p>
        <p className="line-through">{`${price} kr`}</p>
      </>
    ) : (
      <p className="">{`${price} kr`}</p>
    );

  return <div className="flex gap-5 mt-3 mb-3 text-sm">{priceElement}</div>;
};

export default ProductPrice;
