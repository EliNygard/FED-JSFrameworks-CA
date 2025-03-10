import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import * as S from "../Checkout/index.styles";
import { IProduct } from "@/interface";
import CheckoutSuccessItem from "../cartComponents/checkoutSuccessItem";
import CartTotals from "../cartComponents/CartTotals";

interface IOrderDetails {
  email: string;
  firstName: string;
  lastName: string;
  streetName: string;
  city: string;
  cardNumber: string;
}

interface CheckoutSuccessDisplayProps {
  orderDetails: IOrderDetails;
  cartItems: IProduct[];
  cartTotal: number;
  discountTotal: number;
}

const CheckoutSuccessDisplay: React.FC<CheckoutSuccessDisplayProps> = ({
  orderDetails,
  cartItems,
  cartTotal,
  discountTotal,
}) => {
  return (
    <>
      <div className="w-1/2 sm:w-1/3 md:w-1/4 mb-8">
        <Link to={"/"}>
          <Button>Back to shop</Button>
        </Link>
      </div>

      <S.CheckoutContainer>
        <section>
          <h2>Thank you, {orderDetails.firstName}!</h2>
          <h3>Your order is confirmed</h3>
          <p>
            We have sent you a confirmation of the order to your email. You will
            receive an email when the order is shipped from us.
          </p>
          <div className="border px-3 py-5">
            <h4>Order Details</h4>
            <h5>Contact information</h5>
            <p>{orderDetails.email}</p>

            <h5>Payment</h5>
            <p>Card - total amount</p>

            <p>
              {orderDetails.firstName} {orderDetails.lastName}
            </p>
            <p>{orderDetails.streetName}</p>
            <p>{orderDetails.city}</p>
          </div>
        </section>

        <section>
          <h2>Order Summary</h2>
          <div>
            <div className="cart-details">
              <ul>
                {cartItems.map((product) => (
                  <li key={product.id}>
                    <CheckoutSuccessItem product={product} />
                  </li>
                ))}
              </ul>
            </div>
            <CartTotals
              cartTotal={cartTotal}
              discountTotal={discountTotal}
            ></CartTotals>
          </div>
        </section>
      </S.CheckoutContainer>

      <p>Please contact us if you have any questions about your order</p>
      <Link to={"/contact"}>
        <p>Contact us</p>
      </Link>
    </>
  );
};

export default CheckoutSuccessDisplay;
