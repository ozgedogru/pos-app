import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart")).items
    : [],
  subTotal: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart")).subTotal
    : 0,
  taxRate: 0.08,
  totalAmount: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart")).totalAmount
    : 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item._id === action.payload._id
      );

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += action.payload.price;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        });
      }

      state.subTotal = state.items.reduce(
        (sum, item) => sum + item.totalPrice,
        0
      );
      state.totalAmount = state.subTotal * (1 + state.taxRate);
    },

    removeItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item._id === action.payload._id
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          existingItem.totalPrice -= existingItem.price;
        } else {
          state.items = state.items.filter(
            (item) => item._id !== action.payload._id
          );
        }
      }

      state.subTotal = state.items.reduce(
        (sum, item) => sum + item.totalPrice,
        0
      );
      state.totalAmount = state.subTotal * (1 + state.taxRate);
    },

    clearItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item._id !== action.payload._id
      );

      state.subTotal = state.items.reduce(
        (sum, item) => sum + item.totalPrice,
        0
      );
      state.totalAmount = state.subTotal * (1 + state.taxRate);
    },

    resetCart: (state) => {
      state.items = [];
      state.subTotal = 0;
      state.totalAmount = 0;
    },
  },
});
export const { addItem, removeItem, clearItem, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
