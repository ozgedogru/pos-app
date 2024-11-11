import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  invoices: [],
  loading: false,
  statistics: {
    totalRevenue: 0,
    totalSale: 0,
    customers: 0,
  },
};

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
});

export const { setInvoices, setInvoiceLoading, setProducts } =
  invoiceSlice.actions;

export default invoiceSlice.reducer;
