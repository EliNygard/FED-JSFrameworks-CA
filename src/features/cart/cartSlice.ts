/**
 * Redux slice for handling shopping cart state.
 * @module cartSlice
 */
import { createSlice, createSelector } from "@reduxjs/toolkit";
import { ICartState } from "@/interface";
import { RootState } from "@/app/store";

/**
 * Initial state for the cart slice.
 * @type {ICartState}
 * @property {Array} products - List of products in the cart.
 * @property {number} cartTotal - Total price of items in the cart.
 * @property {number} cartQuantity - Total quantity of items in the cart.
 * @property {number} discountTotal - Total discount applied to items.
 */
const initialState: ICartState = {
  products: [],
  cartTotal: 0,
  cartQuantity: 0,
  discountTotal: 0,
};

/**
 * Redux slice to manage shopping cart actions and state.
 */
const cartSlice = createSlice({
  /**
   * Name of the slice.
   * @type {string}
   */
  name: "cart",

  initialState,

  /**
   * Reducers for cart operations.
   */
  reducers: {
    /**
     * Add a product to the cart or increment its quantity if it already exists.
     */
    addProduct: (
      state: ICartState,
      action: { payload: import("@/interface").IProduct }
    ) => {
      const product = action.payload;
      const existingProduct = state.products.find((p) => p.id === product.id);

      if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity || 1) + 1;
      } else {
        state.products.push({ ...product, quantity: 1 });
      }

      // Recalculate total price and quantity
      state.cartTotal = state.products.reduce(
        (total, p) =>
          total +
          (p.price === p.discountedPrice
            ? p.price * p.quantity
            : p.discountedPrice * p.quantity),
        0
      );

      state.cartQuantity = state.products.reduce(
        (total, p) => total + p.quantity,
        0
      );
    },

    /**
     * Remove a product entirely from the cart by its ID.
     */
    removeProduct: (state: ICartState, action: { payload: string }) => {
      const productId = action.payload;
      state.products = state.products.filter((p) => p.id !== productId);

      // Recalculate total price and quantity
      state.cartTotal = state.products.reduce(
        (total, p) =>
          total +
          (p.price === p.discountedPrice
            ? p.price * p.quantity
            : p.discountedPrice * p.quantity),
        0
      );

      state.cartQuantity = state.products.reduce(
        (total, p) => total + p.quantity,
        0
      );
    },

    /**
     * Decrement the quantity of a product in the cart, or remove it if quantity reaches zero.
     */
    decrementProduct: (state: ICartState, action: { payload: string }) => {
      const productId = action.payload;
      const productIndex = state.products.findIndex((p) => p.id === productId);
      if (productIndex !== -1) {
        if (state.products[productIndex].quantity > 1) {
          state.products[productIndex].quantity -= 1;
        } else {
          state.products.splice(productIndex, 1);
        }
      }

      // Recalculate total price and quantity
      state.cartTotal = state.products.reduce(
        (total, p) =>
          total +
          (p.price === p.discountedPrice
            ? p.price * p.quantity
            : p.discountedPrice * p.quantity),
        0
      );

      state.cartQuantity = state.products.reduce(
        (total, p) => total + p.quantity,
        0
      );
    },

    /**
     * Clear all products from the cart, resetting to initial state.
     */
    clearCart: (state: ICartState) => {
      state.products = initialState.products;
      state.cartTotal = initialState.cartTotal;
      state.cartQuantity = initialState.cartQuantity;
    },
  },
});

/**
 * Action creators exported for dispatching cart actions.
 */
export const { addProduct, removeProduct, decrementProduct, clearCart } =
  cartSlice.actions;

/**
 * Default export: Cart reducer for inclusion in the root reducer.
 */
export default cartSlice.reducer;

/**
 * Selector to extract products array from the root state.
 * @param {RootState} state - The root Redux state.
 * @returns {import('@/interface').IProduct[]} Array of products in the cart.
 */
const selectProducts = (state: RootState): import("@/interface").IProduct[] =>
  state.cart.products;

/**
 * Selector to calculate the total discount applied across all cart products.
 * @param {RootState} state - The root Redux state.
 * @returns {number} Total discount amount.
 */
export const selectDiscountTotal = createSelector(
  [selectProducts],
  (products) =>
    products.reduce(
      (total, p) => total + (p.price - p.discountedPrice) * p.quantity,
      0
    )
);
