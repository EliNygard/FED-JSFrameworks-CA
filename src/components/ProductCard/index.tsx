import React from "react";
import { IProduct } from "@/interface";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import Button from "../Button";
import { Link } from "react-router-dom";
import ProductImage from "../productComponents/ProductImage";

export interface IProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  const ratingNumber = product.rating;
  let ratingDisplay;

  if (ratingNumber > 0) {
    const fullStars = Math.floor(ratingNumber);
    const hasHalfStar = ratingNumber - fullStars === 0.5;

    ratingDisplay = (
      <>
        {Array.from({ length: fullStars }, (_, index) => (
          <li key={`star-${index}`}>
            <FaStar className="text-primary" />
          </li>
        ))}
        {hasHalfStar && (
          <FaStarHalfAlt className="text-primary" key="star-half" />
        )}
      </>
    );
  } else {
    ratingDisplay = <FaRegStar className="text-primary" />;
  }

  const price = product.price;
  const discountedPrice = product.discountedPrice;

  let priceElement;
  // let saleBadge;

  if (price > discountedPrice) {
    priceElement = (
      <>
        <p className="text-primary">{discountedPrice}</p>
        <p className="line-through">{price}</p>
      </>
    );
    // saleBadge = <span className={styles.overlaySale}>Sale</span>;
  } else {
    priceElement = <p className="">{price}</p>;
  }

  return (
    <>
      <Link to={`/product/${product.id}`}>
        <div className="relative h-[415px] max-h-[415px] ">
          <ProductImage product={product} />
          {/* <img
            className="h-full w-full object-cover"
            src={product.image.url}
            alt={product.title}
          />
          {saleBadge} */}
        </div>
        <div className="mt-3 mb-4">
          <ul className="flex flex-row gap-1 items-center">
            {ratingDisplay}
            <span className="ml-1 text-xs text-neutral-500">{`(${ratingNumber})`}</span>
          </ul>
        </div>
        <h3 className="uppercase font-montserrat">{product.title}</h3>
        <div className="flex gap-5 mt-3 mb-3">{priceElement}</div>
        <div className="">
          <Button>Add to cart</Button>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
