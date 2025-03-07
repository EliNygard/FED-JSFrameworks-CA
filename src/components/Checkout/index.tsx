import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../Button";
import CartItem from "../cartComponents/CartItem";
import CartTotals from "../cartComponents/CartTotals";
import CustomerForm from "../cartComponents/CustomerForm";
import * as S from "./index.styles";
import { RootState } from "../../app/store";

const Checkout: React.FC = () => {
  const products = useSelector((state: RootState) => state.cart.products);
  useEffect(() => {
    console.log("Cart products: ", products);
  }, [products]);
  return (
    <>
      <div className="w-1/2 sm:w-1/3 md:w-1/4 mb-8">
        <Link to={"/"}>
          <Button>Back to shop</Button>
        </Link>
      </div>
      <h2 className="font-montserrat text-center mb-4 text-xl">
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
          <CartTotals />
        </div>

        <div className="customer-details">
          <CustomerForm />
        </div>
      </S.CheckoutContainer>
    </>
  );
};

export default Checkout;
