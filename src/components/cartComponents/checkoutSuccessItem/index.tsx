import React from "react";
import * as S from "../CartItem/index.styles";
import ProductPrice from "@/components/productComponents/ProductPrice";
import { IProductProps } from "@/interface";

const CheckoutSuccessItem: React.FC<IProductProps> = ({ product }) => {
  const { price, discountedPrice } = product;

  const cartItemTotal = product.price * product.quantity;
  const cartItemTotalDiscounted = product.discountedPrice * product.quantity;
  return (
    <>
      <S.CartItemContainer>
        <div className="flex flex-row gap-3">
          <div className="w-1/2">
            <img src={product.image.url} alt={product.title} />

            <div className="flex flex-row gap-1 mt-2">
              <p>{`Quantity: ${product.quantity}`}</p>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3>{product.title}</h3>
              <ProductPrice product={product} />
            </div>
            <div className="flex gap-5">
              {price > discountedPrice ? (
                <>
                  <span className="text-primary">
                    {cartItemTotalDiscounted.toFixed(2)}
                  </span>
                  <span className="line-through">
                    {cartItemTotal.toFixed(2)}
                  </span>
                </>
              ) : (
                <span>{cartItemTotal.toFixed(2)}</span>
              )}
            </div>
          </div>
        </div>
      </S.CartItemContainer>
    </>
  );
};

export default CheckoutSuccessItem;
