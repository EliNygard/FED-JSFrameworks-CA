import React from "react";
import { IProduct } from "@/interface";
import { FaStar } from "react-icons/fa";

interface IProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  const ratingNumber = product.rating;

  const stars = Array.from({ length: ratingNumber }, (_, index) => (
    <li key={index}>
      <FaStar />
    </li>
  ));

  console.log(stars);

  return (
    <>
      <div>
        <img src={product.image.url} alt={product.title} />
      </div>
      <div>
        <ul className="flex flex-row gap-1 items-center">
          {stars}
          <span className="text-xs">{ratingNumber}</span>
        </ul>
      </div>
      <h3>{product.title}</h3>
    </>
  );
};

export default ProductCard;
