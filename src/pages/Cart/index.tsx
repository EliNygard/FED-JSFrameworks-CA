import Checkout from "@/components/Checkout";
import { Helmet } from "react-helmet-async";

export const Cart = () => {
  return (
    <>
      <Helmet>
        <title>Infinite Finds - Cart and checkout</title>
        <meta name="description" content="Cart" />
      </Helmet>
      <Checkout />
    </>
  );
};
