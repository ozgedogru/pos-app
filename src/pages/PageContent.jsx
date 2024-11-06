import CartPage from "./CartPage";
import HomePage from "./HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InvoicePage from "./InvoicePage";
import CustomerPage from "./CustomerPage";
import StatisticPage from "./StatisticPage";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import ProductPage from "./ProductPage";

const PageContent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/invoice" element={<InvoicePage />} />
        <Route path="/customers" element={<CustomerPage />} />
        <Route path="/statistics" element={<StatisticPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageContent;
