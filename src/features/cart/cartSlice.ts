import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "@/interface";

interface ICartState {
  products: IProduct[];
  cartTotal: number;
  cartQuantity: number;
}

const initialState: ICartState = {
  products: [],
  cartTotal: 0,
  cartQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload;
      const existingProduct = state.products.find((p) => p.id === product.id);

      if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity || 1) + 1;
      } else {
        state.products.push({ ...product, quantity: 1 });
      }

      state.cartTotal = state.products.reduce(
        (total, p) => total + p.price * p.quantity,
        0,
      );

      state.cartQuantity = state.products.reduce(
        (total, p) => total + p.quantity,
        0,
      );

      console.log("Current products in cart: ", state.products);
      console.log("Updated cart total: ", state.cartTotal);
      console.log("Total quantity of products in cart: ", state.cartQuantity);
    },
  },
});

export const { addProduct } = cartSlice.actions;

export default cartSlice.reducer;
