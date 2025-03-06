import { IProduct } from "@/interface";
import React from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

interface ProductRatingProps {
  product: IProduct;
}
const ProductRating: React.FC<ProductRatingProps> = ({ product }) => {
  const { rating } = product;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars === 0.5;
  const ratingDisplay =
    rating > 0 ? (
      <>
        {Array.from({ length: fullStars }, (_, index) => (
          <li key={`star-${index}`}>
            <FaStar className="text-primary" />
          </li>
        ))}
        {hasHalfStar && (
          <FaStarHalfAlt className="text-primary" key="star half" />
        )}
      </>
    ) : (
      <FaRegStar className="text-primary" />
    );

  return (
    <>
      <ul className="flex flex-row gap-1">
        {ratingDisplay}
        <span className="ml-1 text-xs text-neutral-500">{`(${rating})`}</span>
      </ul>
    </>
  );
};

export default ProductRating;
