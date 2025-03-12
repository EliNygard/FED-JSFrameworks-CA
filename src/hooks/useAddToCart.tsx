import { addProduct } from "@/features/cart/cartSlice";
import { IProduct } from "@/interface";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { FaCheck } from "react-icons/fa";

const useAddToCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (product: IProduct) => {
    dispatch(addProduct(product));
    toast(`${product.title} was added to your shopping cart`, {
      description: `${product.discountedPrice} kr`,
      icon: <FaCheck />,
      action: {
        label: "Show cart",
        onClick: () => navigate("/cart"),
      },
    });
  };
};

export default useAddToCart;
