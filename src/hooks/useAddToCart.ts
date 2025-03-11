import { addProduct } from "@/features/cart/cartSlice";
import { IProduct } from "@/interface";
import { useDispatch } from "react-redux";

const useAddToCart = () => {
  const dispatch = useDispatch();

  return (product: IProduct) => {
    dispatch(addProduct(product));
    alert(`${product.title} added to cart`);
  };
};

export default useAddToCart;
