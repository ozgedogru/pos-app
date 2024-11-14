import Header from "../components/Header";
import StatisticCard from "../components/StatisticCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { fetchInvoices } from "../features/invoiceSlice";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const StatisticPage = () => {
  const { invoices, loading } = useSelector((state) => state.invoices);
  const { user } = useSelector((state) => state.user);

  const salesTrend =
    invoices.length > 0
      ? invoices.reduce((acc, invoice) => {
          const date = new Date(invoice.createdAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          });
          const found = acc.find((item) => item.date === date);
          if (found) {
            found.sales += 1;
            found.total += invoice.total;
          } else {
            acc.push({ date, sales: 1, total: invoice.total });
          }
          return acc;
        }, [])
      : [];

  const salesData = [
    { name: "Employee A", sales: 400 },
    { name: "Employee B", sales: 300 },
    { name: "Employee C", sales: 300 },
    { name: "Employee D", sales: 200 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const antIcon = (
    <LoadingOutlined style={{ fontSize: 48, color: "black" }} spin />
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (!invoices || invoices.length === 0) {
      dispatch(fetchInvoices());
    }
  }, [dispatch, invoices]);

  return (
    <div className="h-screen">
      <Header />
      <div className="px-6">
        <div className="px-2">
          <h2>
            Welcome,{" "}
            <span className="text-green-600 font-bold">
              {user ? user.username : "Guest"}
            </span>
            !
          </h2>
          Here you can find all the important statistics related to business.
        </div>
        <StatisticCard />

        {loading ? (
          <div className="flex justify-center items-center h-[300px]">
            <Spin indicator={antIcon} />
          </div>
        ) : (
          <div className="charts my-10 flex flex-col md:flex-row justify-around">
            <div className="shadow-xl p-4 flex-1 flex flex-col items-center">
              <h3 className="text-xl text-center my-4">
                Sales Trend Over Time
              </h3>
              <ResponsiveContainer width="90%" height={240}>
                <AreaChart
                  data={salesTrend}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="sales"
                    stroke="#8884d8"
                    fill="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Area
                    type="monotone"
                    dataKey="total"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="shadow-xl p-4 flex-1 flex flex-col items-center">
              <h3 className="text-xl text-center my-4">
                Sales Distribution by Employee
              </h3>
              <ResponsiveContainer width="100%" height={240}>
                <PieChart>
                  <Pie
                    data={salesData}
                    dataKey="sales"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    innerRadius={50}
                    fill="#8884d8"
                    paddingAngle={5}
                    label
                  >
                    {salesData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatisticPage;
