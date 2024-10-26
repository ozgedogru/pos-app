import React from "react";
import Categories from "../components/Categories";
import Products from "../components/Products";
import CartSummary from "../components/CartSummary";

const HomePage = () => {
  return (
    <div className="px-8 flex justify-between gap-8">
      <div className="categories flex-2 overflow-auto max-h-[calc(100vh-_120px)] pb-2">
        <Categories />
      </div>
      <div className="products flex-[8] border border-green-500">
        <Products />
      </div>
      <div className="cart-summary flex-1 border border-green-500">
        <CartSummary />
      </div>
    </div>
  );
};

export default HomePage;
