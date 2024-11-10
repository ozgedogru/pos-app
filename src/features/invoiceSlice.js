import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  invoices: [],
};

const invoiceSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {
    setInvoices: (state, action) => {
      state.invoices = action.payload;
    },
  },
});

export const { setInvoices } = invoiceSlice.actions;

export default invoiceSlice.reducer;
