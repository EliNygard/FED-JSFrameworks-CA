import React from "react";
import ProductPrice from "@/components/productComponents/ProductPrice";
import * as S from "./index.styles";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  addProduct,
  decrementProduct,
  removeProduct,
} from "@/features/cart/cartSlice";
import { IProductProps } from "@/interface";

const CartItem: React.FC<IProductProps> = ({ product }) => {
  const dispatch = useDispatch();

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
              <button
                className="bg-primary text-white h-7 w-7 justify-center"
                onClick={() => dispatch(decrementProduct(product.id))}
              >
                -
              </button>
              <input
                type="number"
                value={product.quantity}
                readOnly
                className="bg-primary/60 text-white h-7 w-7 justify-center text-center text-xs"
              />
              <button
                className="bg-primary text-white h-7 w-7 justify-center"
                onClick={() => dispatch(addProduct(product))}
              >
                +
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3>{product.title}</h3>
              <ProductPrice product={product} />
              <button>
                <FaRegTrashAlt
                  onClick={() => dispatch(removeProduct(product.id))}
                />
              </button>
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

export default CartItem;
