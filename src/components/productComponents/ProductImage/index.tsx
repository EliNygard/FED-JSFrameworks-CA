import React from "react";
import { IProductProps } from "@/interface";
import styles from "./index.module.css";

const ProductImage: React.FC<IProductProps> = ({ product }) => {
  const { price, discountedPrice } = product;

  const saleBadge =
    price > discountedPrice ? (
      <span className={styles.overlaySale}>Sale</span>
    ) : null;

  return (
    <>
      <img
        className="h-full w-full object-cover"
        src={product.image.url}
        alt={product.title}
      />
      {saleBadge}
    </>
  );
};

export default ProductImage;
