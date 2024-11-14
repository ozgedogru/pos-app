import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import productsReducer from "../features/productsSlice";
import categoriesReducer from "../features/categoriesSlice";
import invoiceReducer from "../features/invoiceSlice";
import userReducer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    products: productsReducer,
    categories: categoriesReducer,
    invoices: invoiceReducer,
  },
});

export default store;
