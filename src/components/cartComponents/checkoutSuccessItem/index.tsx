import React from "react";
import * as S from "../CartItem/index.styles";
import ProductPrice from "@/components/productComponents/ProductPrice";
import { IProductProps } from "@/interface";

/**
 * CheckoutSuccessItem component displays the item on checkout success
 * - image of product
 * - the quantity
 * - the product title
 * - the product price and discounted price if so
 * - the total quantity and price
 */

const CheckoutSuccessItem: React.FC<IProductProps> = ({ product }) => {
  const { price, discountedPrice, quantity, title, image } = product;
  const cartItemTotal = price * quantity;
  const cartItemTotalDiscounted = discountedPrice * quantity;
  return (
    <S.CartItemContainer>
      <div className="flex flex-row gap-3">
        <div className="w-1/2">
          <img src={image.url} alt={title} />

          <div className="flex flex-row gap-1 mt-2">
            <p>{`Quantity: ${quantity}`}</p>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h3>{title}</h3>
            <ProductPrice price={price} discountedPrice={discountedPrice} />
          </div>
          <div className="flex gap-5">
            {price > discountedPrice ? (
              <>
                <span className="text-primary">
                  {cartItemTotalDiscounted.toFixed(2)}
                </span>
                <span className="line-through">{cartItemTotal.toFixed(2)}</span>
              </>
            ) : (
              <span>{cartItemTotal.toFixed(2)}</span>
            )}
          </div>
        </div>
      </div>
    </S.CartItemContainer>
  );
};

export default CheckoutSuccessItem;
