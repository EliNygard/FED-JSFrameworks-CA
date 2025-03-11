import React, { useEffect } from "react";
import * as S from "./index.styles";
import { CartTotalsProps } from "@/interface";

const CartTotals: React.FC<CartTotalsProps> = ({
  cartTotal,
  discountTotal,
}) => {
  useEffect(() => {
    console.log("cart total: ", cartTotal);
  }, [cartTotal]);

  return (
    <S.CartTotals>
      <div>
        <h4>Total discount</h4>
        <span>{discountTotal.toFixed(2)}</span>
      </div>
      <div>
        <h4 className="font-bold">Total</h4>
        <span>{cartTotal.toFixed(2)}</span>
      </div>
    </S.CartTotals>
  );
};

export default CartTotals;
