import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Products from "../components/Products";
import CartSummary from "../components/CartSummary";
import Header from "../components/Header";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCategories, setCategoryLoading } from "../features/categoriesSlice";
import { setProductLoading, setProducts } from "../features/productsSlice";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { setInvoiceLoading, setInvoices } from "../features/invoiceSlice";

const HomePage = () => {
  const dispatch = useDispatch();

  const { loading: categoryLoading } = useSelector((state) => state.categories);
  const { loading: productLoading } = useSelector((state) => state.products);

  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const getCategories = async () => {
      dispatch(setCategoryLoading());
      try {
        const res = await axios.get(
          "http://localhost:5000/api/categories/get-all"
        );
        dispatch(setCategories(res.data));
      } catch (error) {
        console.log(error);
      }
    };

    const getAllProducts = async () => {
      dispatch(setProductLoading());
      try {
        const res = await axios.get(
          "http://localhost:5000/api/products/get-all"
        );
        dispatch(setProducts(res.data));
      } catch (error) {
        console.log(error);
      }
    };

    const getInvoices = async () => {
      dispatch(setInvoiceLoading());
      try {
        const res = await axios.get(
          "http://localhost:5000/api/invoice/get-all"
        );
        dispatch(setInvoices(res.data));
      } catch (error) {
        console.log(error);
        dispatch(setInvoiceLoading());
      }
    };

    getInvoices();
    getAllProducts();
    getCategories();
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
