import {
  AppstoreOutlined,
  MoneyCollectOutlined,
  ShoppingCartOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { useEffect, useState } from "react";

const StatisticCard = () => {
  const [totalRevenue, setTotalRevenue] = useState();
  const [totalSale, setTotalSale] = useState();
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getInvoices = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/invoice/get-all"
        );
        const total = res.data
          .reduce((total, i) => i.total + total, 0)
          .toFixed(2);
        setTotalRevenue(total);
        setTotalSale(res.data.length);

        const uniqueCustomers = new Set(
          res.data.map((invoice) => invoice.customerName)
        );
        setCustomers(uniqueCustomers.size);
      } catch (error) {
        console.log(error);
      }
    };
    getInvoices();
  }, []);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/products/get-all"
        );
        setProducts(res.data.length);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProducts();
  }, []);

  const statisticsData = [
    {
      title: "Total Customers",
      value: customers,
      icon: (
        <UserSwitchOutlined className="text-5xl md:text-6xl text-orange-700" />
      ),
    },
    {
      title: "Total Revenue",
      value: totalRevenue,
      icon: (
        <MoneyCollectOutlined className="text-5xl md:text-6xl text-orange-700" />
      ),
    },
    {
      title: "Total Sales",
      value: totalSale,
      icon: (
        <ShoppingCartOutlined className="text-5xl md:text-6xl text-orange-700" />
      ),
    },
    {
      title: "Total Products",
      value: products,
      icon: (
        <AppstoreOutlined className="text-5xl md:text-6xl text-orange-700" />
      ),
    },
  ];

  return (
    <div className="statistic-cards grid grid-cols-2 md:grid-cols-4 my-6 gap-4">
      {statisticsData.map((stat, index) => (
        <div
          key={index}
          className="card-item bg-navy text-white p-4 md:px-6 md:py-8 rounded-md flex md:justify-evenly flex-wrap md:items-center justify-center"
        >
          <div>{stat.icon}</div>
          <div className="flex flex-col justify-center md:items-center text-center min-w-36">
            <p className="text-slate-400 text-sm md:text-lg">{stat.title}</p>
            <p className="md:text-xl font-bold">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatisticCard;
