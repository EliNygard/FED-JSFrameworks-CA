import React, { JSX } from "react";
import * as S from "./index.styles";
import { CartTotalsProps } from "@/interface";

/**
 * CartTotals component displays the total discount and total price for the shopping cart.
 *
 * @param {CartTotalsProps} props - Props object containing totals to display.
 * @param {number} props.cartTotal - The total price of all items in the cart.
 * @param {number} props.discountTotal - The total discount amount applied to the cart.
 * @returns {JSX.Element} A styled container displaying discount and total amounts.
 */
const CartTotals: React.FC<CartTotalsProps> = ({
  cartTotal,
  discountTotal,
}: CartTotalsProps): JSX.Element => {
  return (
    <S.CartTotals>
      <div>
        <h4>Total discount</h4>
        <span>{`${discountTotal.toFixed(2)} kr`}</span>
      </div>
      <div className="font-bold">
        <h4>Total</h4>
        <span>{`${cartTotal.toFixed(2)} kr`}</span>
      </div>
    </S.CartTotals>
  );
};

export default CartTotals;
