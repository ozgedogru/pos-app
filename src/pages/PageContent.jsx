import Header from "../components/Header";
import CartPage from "./CartPage";
import HomePage from "./HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const PageContent = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageContent;
