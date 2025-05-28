import React from "react";

export interface ProductPriceProps {
  price: number;
  discountedPrice: number;
}

/**
 * ProductPrice component returns a price element based on the price and discounted price
 * If the price is higher than the discounted price, meaning it is discounted, the component returns the discounted price,
 * if the values are the same, it returns the price.
 * @param param0
 * @returns
 */

const ProductPrice: React.FC<ProductPriceProps> = ({
  price,
  discountedPrice,
}) => {
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
