/**
 * Redux store configuration with persistence using redux-persist.
 * @module store
 */
import {
  configureStore,
  combineReducers,
  EnhancedStore,
} from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import { persistStore, persistReducer, Persistor } from "redux-persist";
import storage from "redux-persist/lib/storage";
import type { PersistConfig } from "redux-persist";
import type { Reducer } from "redux";

/**
 * The shape of the application's root state.
 * @typedef {ReturnType<typeof rootReducer>} RootState
 */

/**
 * Combined root reducer for the Redux store.
 * @type {Reducer<RootState>}
 */
const rootReducer: Reducer = combineReducers({
  /**
   * Cart slice reducer.
   */
  cart: cartReducer,
});

/**
 * Persistence configuration for redux-persist.
 * @type {PersistConfig<RootState>}
 * @property {string} key - Key prefix in storage.
 * @property {Storage} storage - Storage engine (defaults to localStorage).
 * @property {Array<keyof RootState>} whitelist - Reducer keys to persist.
 */
const persistConfig: PersistConfig<ReturnType<typeof rootReducer>> = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

/**
 * Root reducer enhanced with persistence capabilities.
 * @type {Reducer<RootState>}
 */
const persistedReducer: Reducer = persistReducer<
  ReturnType<typeof rootReducer>
>(persistConfig, rootReducer);

/**
 * Configure the Redux store with the persisted reducer.
 * @constant {EnhancedStore<ReturnType<typeof rootReducer>>}
 */
export const store: EnhancedStore<ReturnType<typeof rootReducer>> =
  configureStore({
    reducer: persistedReducer,
  });

/**
 * Persistor object to manage store persistence lifecycle.
 * @constant {Persistor}
 */
export const persistor: Persistor = persistStore(store);

/**
 * Type definition for the Redux root state.
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * Default export: the configured Redux store instance.
 * @exports store
 */
export default store;
