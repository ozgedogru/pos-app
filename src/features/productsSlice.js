import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
    setProductLoading: (state) => {
      state.loading = true;
    },
  },
});

export const { setProducts, setProductLoading } = productsSlice.actions;
export default productsSlice.reducer;
