import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  categories: [],
  loading: false,
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await axios.get(
      "http://localhost:5000/api/categories/get-all"
    );
    return response.data; // Burada kategoriler döndürülüyor
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.loading = true;
      state.error = null; // Hata mesajını sıfırlıyoruz
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.loading = false;
    });
    // Hata durumunu ele alma
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message; // Hata mesajını burada saklıyoruz
    });
  },
});

export const { setCategories, setCategoryLoading } = categoriesSlice.actions;
export default categoriesSlice.reducer;
