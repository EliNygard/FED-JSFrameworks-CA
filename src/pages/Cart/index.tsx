import { RootState } from "@/app/store";
import Button from "@/components/Button";
import Checkout from "@/components/Checkout";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.products);

  return (
    <>
      <Helmet>
        <title>Infinite Finds - Cart and checkout</title>
        <meta name="description" content="Cart" />
      </Helmet>
      <div className="max-w-5xl m-auto">
        {cart.length === 0 ? (
          <div className="my-4 mx-auto flex flex-col items-center max-w-3xl">
            <p>Your shopping cart is empty</p>
            <div className="w-full sm:w-1/3 md:w-1/4 mb-8 my-8">
              <Link to={"/"}>
                <Button>Back to shop</Button>
              </Link>
            </div>
          </div>
        ) : (
          <Checkout />
        )}
      </div>
    </>
  );
};
