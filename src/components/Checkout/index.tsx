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
import ErrorBoundary from "../ErrorBoundary";

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
                <ErrorBoundary fallback={<p>Could not load this cart item.</p>}>
                  <CartItem product={product} />
                </ErrorBoundary>
              </li>
            ))}
          </ul>
          <ErrorBoundary fallback={<p>Could not load cart totals</p>}>
            <CartTotals cartTotal={cartTotal} discountTotal={discountTotal} />
          </ErrorBoundary>
        </div>

        <div className="customer-details">
          <ErrorBoundary fallback={<p>Could not load checkout form.</p>}>
            <CustomerForm />
          </ErrorBoundary>
        </div>
      </S.CheckoutContainer>
    </>
  );
};

export default Checkout;
