import React from "react";
import Categories from "../components/Categories";
import Products from "../components/Products";
import CartSummary from "../components/CartSummary";

const HomePage = () => {
  return (
    <div className="px-8 flex justify-between gap-8">
      <div className="categories overflow-auto max-h-[calc(100vh-_120px)] min-w-[140px] pb-2">
        <Categories />
      </div>
      <div className="products flex-[8]">
        <Products />
      </div>
      <div className="cart-summary shadow-2xl flex-1 min-w-[300px] md:-mr-[24px] md:-mt-[24px]">
        <CartSummary />
      </div>
    </div>
  );
};

export default HomePage;
