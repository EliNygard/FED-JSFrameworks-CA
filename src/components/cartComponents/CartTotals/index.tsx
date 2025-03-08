import { RootState } from "@/app/store";
import * as S from "./index.styles";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectDiscountTotal } from "@/features/cart/cartSlice";

const CartTotals = () => {
  const cartTotal = useSelector((state: RootState) => state.cart.cartTotal);
  const discountTotal = useSelector(selectDiscountTotal);

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
