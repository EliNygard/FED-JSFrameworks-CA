import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import * as S from "../Checkout/index.styles";
import { CheckoutSuccessDisplayProps } from "@/interface";
import CheckoutSuccessItem from "../cartComponents/checkoutSuccessItem";
import CartTotals from "../cartComponents/CartTotals";

const CheckoutSuccessDisplay: React.FC<CheckoutSuccessDisplayProps> = ({
  orderDetails,
  cartItems,
  cartTotal,
  discountTotal,
  price,
  discountedPrice,
  quantity,
  image,
  title,
}) => {
  return (
    <div className="max-w-5xl m-auto mt-8">
      <S.CheckoutContainer>
        <section className="sm:mx-3">
          <h2 className="font-montserrat mb-4">
            Thank you, {orderDetails.firstName}!
          </h2>
          <h3 className="font-semibold mb-2">Your order is confirmed</h3>
          <p>
            We have sent you a confirmation of the order to your email. You will
            receive an email when the order is shipped from us.
          </p>
          <section className="border px-3 py-5 my-4 flex flex-col gap-2">
            <h4 className="font-semibold">Order Details</h4>

            <h5 className="font-semibold mt-2">Contact information</h5>
            <p>{orderDetails.email}</p>

            <h5 className="font-semibold mt-2">Payment</h5>
            <p>Card - {cartTotal.toFixed(2)} kr</p>

            <div className="mt-2">
              <p>
                {orderDetails.firstName} {orderDetails.lastName}
              </p>
              <p>{orderDetails.streetName}</p>
              <p>{orderDetails.city}</p>
            </div>
          </section>

          <div className="mb-8">
            <Link to={"/"}>
              <Button>Back to shop</Button>
            </Link>
          </div>

          <div className="mt-14 flex flex-col gap-4">
            <p>Please contact us if you have any questions about your order</p>
            <Link to={"/contact"}>
              <Button>Contact us</Button>
            </Link>
          </div>
        </section>

        <section className="mt-4 sm:mt-0">
          <h2 className="font-montserrat mb-4">Order Summary</h2>
          <div>
            <div className="cart-details">
              <ul>
                {cartItems.map((product) => (
                  <li key={product.id}>
                    <CheckoutSuccessItem
                      quantity={quantity}
                      price={price}
                      discountedPrice={discountedPrice}
                      image={image}
                      title={title}
                    />
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
    </div>
  );
};

export default CheckoutSuccessDisplay;
