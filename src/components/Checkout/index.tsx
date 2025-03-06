import { Link } from "react-router-dom";
import Button from "../Button";
import CartItems from "../cartComponents/CartItems";
import CartTotals from "../cartComponents/CartTotals";
import CustomerForm from "../cartComponents/CustomerForm";

const Checkout = () => {
  return (
    <>
      <div className="w-1/2 mb-8">
        <Link to={"/"}>
          <Button>Back to shop</Button>
        </Link>
      </div>
      <h2 className="font-montserrat text-center mb-4 text-xl">
        Your shopping cart
      </h2>

      <div>
        <CartItems />

        <CartTotals />
      </div>

      <div>
        <CustomerForm />
      </div>
    </>
  );
};

export default Checkout;
