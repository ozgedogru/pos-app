import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Products from "../components/Products";
import CartSummary from "../components/CartSummary";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../features/categoriesSlice";
import { fetchProducts } from "../features/productsSlice";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { fetchInvoices } from "../features/invoiceSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.user);

  const { loading: categoryLoading } = useSelector((state) => state.categories);
  const { loading: productLoading } = useSelector((state) => state.products);

  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
    dispatch(fetchInvoices());
  }, [dispatch]);

  const antIcon = (
    <LoadingOutlined style={{ fontSize: 48, color: "black" }} spin />
  );

  if (categoryLoading || productLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin indicator={antIcon} />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header setSearchTerm={setSearchTerm} />
      <div className="px-8 md:flex justify-between gap-8">
        <div className="categories overflow-auto max-h-[calc(100vh_-_7rem)] md:min-w-[140px] md:mx-1 pb-6">
          <Categories
            onSelectCategory={handleCategorySelect}
            selectedCategory={selectedCategory}
          />
        </div>
        <div className="products flex-[8] overflow-y-auto max-h-[calc(100vh_-_7rem)] pb-8">
          {!isLoggedIn && (
            <div>
              <h5 className="mb-4 text-xs sm:text-sm md:text-md lg:text-lg">
                Feel free to explore products and view statistics, but to start
                ordering and access all features, just{" "}
                <a href="/login" className="underline text-navy">
                  log in
                </a>
                !
              </h5>
            </div>
          )}
          <Products
            selectedCategory={selectedCategory}
            searchTerm={searchTerm}
          />
        </div>
        <div className="cart-summary shadow-2xl flex-1 min-w-[300px] md:-mr-[24px] md:-mt-[1.5rem]">
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
