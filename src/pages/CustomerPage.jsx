import { Table } from "antd";
import React from "react";

const CustomerPage = () => {
  const dataSource = [
    {
      key: "1",
      customerName: "John Doe",
      phoneNumber: "+1 (555) 123-4567",
      transactionDate: "2024-10-28",
    },
    {
      key: "2",
      customerName: "Jane Smith",
      phoneNumber: "+1 (555) 987-6543",
      transactionDate: "2024-10-27",
    },
    {
      key: "3",
      customerName: "Michael Johnson",
      phoneNumber: "+1 (555) 234-5678",
      transactionDate: "2024-10-26",
    },
    {
      key: "4",
      customerName: "Emily Davis",
      phoneNumber: "+1 (555) 876-5432",
      transactionDate: "2024-10-25",
    },
    {
      key: "5",
      customerName: "Chris Brown",
      phoneNumber: "+1 (555) 345-6789",
      transactionDate: "2024-10-24",
    },
  ];
  const columns = [
    {
      title: "Customer Name",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Transaction Date",
      dataIndex: "transactionDate",
      defaultSortOrder: "descend",
      sorter: (a, b) =>
        new Date(a.transactionDate) - new Date(b.transactionDate),
    },
  ];

  return (
    <div className="px-6">
      <h1 className="text-3xl font-bold text-center mb-4">Customers</h1>
      <Table dataSource={dataSource} columns={columns} bordered></Table>
    </div>
  );
};

export default CustomerPage;
