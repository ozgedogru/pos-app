import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Products from "../components/Products";
import CartSummary from "../components/CartSummary";
import Header from "../components/Header";
import axios from "axios";

const HomePage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/categories/get-all"
        );
        setCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, [categories]);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="px-8 md:flex justify-between gap-8">
        <div className="categories overflow-auto max-h-[calc(100vh_-_7rem)] md:min-w-[140px] md:mx-1 pb-6">
          <Categories categories={categories} />
        </div>
        <div className="products flex-[8] overflow-y-auto max-h-[calc(100vh_-_7rem)] pb-8">
          <Products categories={categories} />
        </div>
        <div className="cart-summary shadow-2xl flex-1 min-w-[300px] md:-mr-[24px] md:-mt-[1.5rem]">
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
