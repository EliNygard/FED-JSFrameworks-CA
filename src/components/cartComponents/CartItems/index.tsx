import ProductPrice from "@/components/productComponents/ProductPrice";
import * as S from "./index.styles";
import { FaRegTrashAlt } from "react-icons/fa";

const CartItems = () => {
  const product = {
    price: 399,
    discountedPrice: 299,
  };
  return (
    <>
      <S.CartItemsContainer>
        <div className="flex flex-row gap-3">
          <div className="w-1/2">
            <img src="./Skjermbilde.png" alt="" />

            <div className="flex flex-row gap-1 mt-2">
              <button className="bg-primary text-white h-7 w-7 justify-center">
                -
              </button>
              <input
                type="number"
                defaultValue={product.quantity}
                className="bg-primary/60 text-white h-7 w-7 justify-center text-center text-xs"
              />
              <button className="bg-primary text-white h-7 w-7 justify-center">
                +
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3>Product Title</h3>
              <ProductPrice product={product} />
              <button>
                <FaRegTrashAlt />
              </button>
            </div>
            <div className="flex gap-5">
              <span>399</span>
              <span>299</span>
            </div>
          </div>
        </div>
      </S.CartItemsContainer>
    </>
  );
};

export default CartItems;
