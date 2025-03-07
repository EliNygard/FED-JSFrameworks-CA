import { RootState } from "@/app/store";
import * as S from "./index.styles";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const CartTotals = () => {
  const cartTotal = useSelector((state: RootState) => state.cart.cartTotal);
  const products = useSelector((state: RootState) => state.cart.products);

  useEffect(() => {
    console.log("cart total: ", cartTotal);
    console.log("cart products: ", products);
  }, [cartTotal]);

  return (
    <S.CartTotals>
      <div>
        <h4>Sum</h4>
        <span>{cartTotal.toFixed(2)}</span>
      </div>
      <div>
        <h4>Discount</h4>
        <span>100.00</span>
      </div>
      <div>
        <h4 className="font-bold">Total</h4>
        <span>299.00</span>
      </div>
    </S.CartTotals>
  );
};

export default CartTotals;
