import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  loading: false,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
      state.loading = false;
    },
    setCategoryLoading: (state) => {
      state.loading = true;
    },
  },
});

export const { setCategories, setCategoryLoading } = categoriesSlice.actions;
export default categoriesSlice.reducer;
