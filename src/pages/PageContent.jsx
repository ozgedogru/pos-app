import CartPage from "./CartPage";
import HomePage from "./HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InvoicePage from "./InvoicePage";
import CustomerPage from "./CustomerPage";
import StatisticPage from "./StatisticPage";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import ProductPage from "./ProductPage";
import ProtectedPage from "./ProtectedPage";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const PageContent = () => {
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedPage>
              <HomePage />
            </ProtectedPage>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedPage>
              <CartPage />
            </ProtectedPage>
          }
        />
        <Route
          path="/invoice"
          element={
            <ProtectedPage>
              <InvoicePage />
            </ProtectedPage>
          }
        />
        <Route
          path="/customers"
          element={
            <ProtectedPage>
              <CustomerPage />
            </ProtectedPage>
          }
        />
        <Route
          path="/statistics"
          element={
            <ProtectedPage>
              <StatisticPage />
            </ProtectedPage>
          }
        />
        <Route
          path="/products"
          element={
            <ProtectedPage>
              <ProductPage />
            </ProtectedPage>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageContent;
