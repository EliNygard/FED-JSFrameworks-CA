import * as S from "./index.styles";

const CartTotals = () => {
  return (
    <S.CartTotals>
      <div>
        <h4>Sum</h4>
        <span>399.00</span>
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
