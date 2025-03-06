import ProductPrice from "@/components/productComponents/ProductPrice";
import * as S from "./index.styles";

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
            <p>Input to add amount</p>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h3>Product Title</h3>
              <ProductPrice product={product} />
              <button>Delete</button>
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
