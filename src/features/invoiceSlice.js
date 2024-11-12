import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  invoices: [],
  loading: false,
  statistics: {
    totalRevenue: 0,
    totalSale: 0,
    customers: 0,
  },
};

export const fetchInvoices = createAsyncThunk(
  "invoices/fetchInvoices",
  async () => {
    const response = await axios.get(
      process.env.REACT_APP_SERVER_URL + "/api/invoice/get-all"
    );
    return response.data;
  }
);

const invoiceSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {
    setInvoices: (state, action) => {
      state.invoices = action.payload;
      state.loading = false;

      const totalRevenue = state.invoices
        .reduce((total, i) => i.total + total, 0)
        .toFixed(2);
      const totalSale = state.invoices.length;

      const uniqueCustomers = new Set(
        state.invoices.map((invoice) => invoice.customerPhone)
      );
      const customers = uniqueCustomers.size;

      state.statistics = { totalRevenue, totalSale, customers };
    },
    setInvoiceLoading: (state) => {
      state.loading = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInvoices.fulfilled, (state, action) => {
      state.loading = false;
      state.invoices = action.payload;

      const totalRevenue = state.invoices
        .reduce((total, i) => i.total + total, 0)
        .toFixed(2);
      const totalSale = state.invoices.length;

      const uniqueCustomers = new Set(
        state.invoices.map((invoice) => invoice.customerPhone)
      );
      const customers = uniqueCustomers.size;

      state.statistics = { totalRevenue, totalSale, customers };
    });

    builder.addCase(fetchInvoices.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { setInvoices, setInvoiceLoading, setProducts } =
  invoiceSlice.actions;

export default invoiceSlice.reducer;
