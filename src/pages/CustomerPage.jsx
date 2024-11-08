import { Table } from "antd";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";

const CustomerPage = () => {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const getInvoices = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/invoice/get-all"
        );
        setDataSource(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getInvoices();
  }, []);

  const columns = [
    {
      title: "Customer Name",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Phone Number",
      dataIndex: "customerPhone",
      key: "customerPhone",
    },
    {
      title: "Transaction Date",
      dataIndex: "createdAt",
      render: (text) => {
        return <span>{text.substring(0, 10)}</span>;
      },
      defaultSortOrder: "descend",
      sorter: (a, b) =>
        new Date(a.transactionDate) - new Date(b.transactionDate),
    },
  ];

  return (
    <div>
      <Header />
      <div className="px-6">
        <h1 className="text-3xl font-bold text-center mb-4">Customers</h1>
        <Table
          dataSource={dataSource}
          columns={columns}
          scroll={{ x: 1000, y: 300 }}
          pagination={false}
          bordered
        ></Table>
      </div>
    </div>
  );
};

export default CustomerPage;
