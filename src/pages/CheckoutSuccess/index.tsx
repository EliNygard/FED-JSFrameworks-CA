import CheckoutSuccessDisplay from "@/components/CheckoutSuccess";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export const CheckoutSuccess = () => {
  const location = useLocation();
  const orderDetails = location.state?.orderDetails;
  const cartItems = location.state?.cartItems;
  const cartTotal = location.state?.cartTotal;
  const discountTotal = location.state?.discountTotal;

  return (
    <>
      <Helmet>
        <title>Order completed</title>
        <meta name="description" content="Checkout success" />
      </Helmet>
      <CheckoutSuccessDisplay
        orderDetails={orderDetails}
        cartItems={cartItems}
        cartTotal={cartTotal}
        discountTotal={discountTotal}
      />
    </>
  );
};
