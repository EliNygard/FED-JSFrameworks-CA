import React, { JSX } from "react";
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

/**
 * CartItem component displays a single product in the shopping cart, including image,
 * title, price details, and controls to adjust quantity or remove the item.
 *
 * @param {IProductProps} props - Props for the CartItem component.
 * @param {import('@/interface').IProduct} props.product - The product to render in the cart.
 * @returns {JSX.Element} A styled container with product info and controls.
 */
const CartItem: React.FC<IProductProps> = ({
  product,
}: IProductProps): JSX.Element => {
  const dispatch = useDispatch();

  const { price, discountedPrice, quantity, image, title, id } = product;

  // Calculate total price before and after discount
  const cartItemTotal = price * quantity;
  const cartItemTotalDiscounted = discountedPrice * quantity;

  return (
    <S.CartItemContainer>
      <div className="flex flex-row gap-8">
        <div>
          <img src={image.url} alt={title} />

          <div className="flex flex-row gap-1 mt-2">
            <button
              className="bg-primary text-white h-7 w-7 justify-center cursor-pointer"
              onClick={() => dispatch(decrementProduct(id))}
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              readOnly
              className="bg-primary/60 text-white h-7 w-7 justify-center text-center text-xs"
            />
            <button
              className="bg-primary text-white h-7 w-7 justify-center cursor-pointer"
              onClick={() => dispatch(addProduct(product))}
            >
              +
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h3>{title}</h3>
            <ProductPrice price={price} discountedPrice={discountedPrice} />
            <button
              aria-label="Remove item"
              onClick={() => dispatch(removeProduct(id))}
            >
              <FaRegTrashAlt />
            </button>
          </div>
          <div className="flex gap-5 text-sm">
            {price > discountedPrice ? (
              <>
                <span className="text-primary">
                  {`${cartItemTotalDiscounted.toFixed(2)} kr`}
                </span>
                <span className="line-through">
                  {`${cartItemTotal.toFixed(2)} kr`}
                </span>
              </>
            ) : (
              <span>{`${cartItemTotal.toFixed(2)} kr`}</span>
            )}
          </div>
        </div>
      </div>
    </S.CartItemContainer>
  );
};

export default CartItem;
