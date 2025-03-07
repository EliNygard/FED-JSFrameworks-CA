import { Link } from "react-router-dom";
import Button from "../Button";
import CartItems from "../cartComponents/CartItems";
import CartTotals from "../cartComponents/CartTotals";
import CustomerForm from "../cartComponents/CustomerForm";
import * as S from "./index.styles";

const Checkout = () => {
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
          <CartItems />
          <CartItems />
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
