import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../Button";
import CartItem from "../cartComponents/CartItem";
import CartTotals from "../cartComponents/CartTotals";
import CustomerForm from "../cartComponents/CustomerForm";
import * as S from "./index.styles";
import { RootState } from "../../app/store";
import { selectDiscountTotal } from "@/features/cart/cartSlice";

const Checkout: React.FC = () => {
  const products = useSelector((state: RootState) => state.cart.products);
  const cartTotal = useSelector((state: RootState) => state.cart.cartTotal);
  const discountTotal = useSelector(selectDiscountTotal);

  return (
    <>
      <div className="w-1/2 sm:w-1/3 md:w-1/4 mb-8">
        <Link to={"/"}>
          <Button>Back to shop</Button>
        </Link>
      </div>
      <h2 className="font-montserrat text-center mb-4 text-xl md:text-2xl">
        Your shopping cart
      </h2>
      <S.CheckoutContainer>
        <div className="cart-details">
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <CartItem product={product} />
              </li>
            ))}
          </ul>
          <CartTotals cartTotal={cartTotal} discountTotal={discountTotal} />
        </div>

        <div className="customer-details">
          <CustomerForm />
        </div>
      </S.CheckoutContainer>
    </>
  );
};

export default Checkout;
