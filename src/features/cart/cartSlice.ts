import { createSlice, createSelector } from "@reduxjs/toolkit";
import { IProduct } from "@/interface";
import { RootState } from "@/app/store";

interface ICartState {
  products: IProduct[];
  cartTotal: number;
  cartQuantity: number;
  discountTotal: number;
}

const initialState: ICartState = {
  products: [],
  cartTotal: 0,
  cartQuantity: 0,
  discountTotal: 0,
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
        (total, p) =>
          total +
          (p.price === p.discountedPrice
            ? p.price * p.quantity
            : p.discountedPrice * p.quantity),
        0,
      );

      state.cartQuantity = state.products.reduce(
        (total, p) => total + p.quantity,
        0,
      );
    },
    removeProduct: (state, action) => {
      const productId = action.payload;
      state.products = state.products.filter((p) => p.id !== productId);

      state.cartTotal = state.products.reduce(
        (total, p) =>
          total +
          (p.price === p.discountedPrice
            ? p.price * p.quantity
            : p.discountedPrice * p.quantity),
        0,
      );

      state.cartQuantity = state.products.reduce(
        (total, p) => total + p.quantity,
        0,
      );

      console.log("cart: ", state.cartTotal);
    },

    decrementProduct: (state, action) => {
      const productId = action.payload;
      const productIndex = state.products.findIndex((p) => p.id === productId);
      if (productIndex !== -1) {
        if (state.products[productIndex].quantity > 1) {
          state.products[productIndex].quantity -= 1;
        } else {
          state.products.splice(productIndex, 1);
        }
      }

      state.cartTotal = state.products.reduce(
        (total, p) =>
          total +
          (p.price === p.discountedPrice
            ? p.price * p.quantity
            : p.discountedPrice * p.quantity),
        0,
      );

      state.cartQuantity = state.products.reduce(
        (total, p) => total + p.quantity,
        0,
      );
    },
    clearCart: (state) => {
      state.products = initialState.products;
      state.cartTotal = initialState.cartTotal;
      state.cartQuantity = initialState.cartQuantity;
    },
  },
});

export const { addProduct, removeProduct, decrementProduct, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;

// Selectors

const selectProducts = (state: RootState) => state.cart.products;

export const selectDiscountTotal = createSelector(
  [selectProducts],
  (products) =>
    products.reduce(
      (total, p) => total + (p.price - p.discountedPrice) * p.quantity,
      0,
    ),
);
