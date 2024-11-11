import { Table, Tooltip } from "antd";
import React, { useEffect, useMemo } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setInvoices } from "../features/invoiceSlice";
import { StarFilled } from "@ant-design/icons";

const CustomerPage = () => {
  const { invoices } = useSelector((state) => state.invoices);

  const dispatch = useDispatch();

  useEffect(() => {
    const getInvoices = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/invoice/get-all"
        );
        dispatch(setInvoices(res.data));
      } catch (error) {
        console.log(error);
      }
    };
    getInvoices();
  }, [dispatch]);

  const customerData = useMemo(() => {
    const customerMap = {};

    invoices.forEach((invoice) => {
      const { customerName, customerPhone, createdAt } = invoice;

      if (!customerMap[customerPhone]) {
        customerMap[customerPhone] = {
          customerName,
          customerPhone,
          lastTransactionDate: createdAt,
          invoiceCount: 1,
        };
      } else {
        customerMap[customerPhone].invoiceCount += 1;
        if (
          new Date(createdAt) >
          new Date(customerMap[customerPhone].lastTransactionDate)
        ) {
          customerMap[customerPhone].lastTransactionDate = createdAt;
        }
      }
    });

    return Object.values(customerMap);
  }, [invoices]);

  const maxInvoiceCount = useMemo(() => {
    return Math.max(
      ...customerData.map((customer) => customer.invoiceCount),
      0
    );
  }, [customerData]);

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
      title: "Last Transaction Date",
      dataIndex: "lastTransactionDate",
      render: (text) => <span>{text.substring(0, 10)}</span>,
      key: "lastTransactionDate",
    },
    {
      title: "Total Invoice Count",
      dataIndex: "invoiceCount",
      key: "invoiceCount",
      render: (count) => (
        <span>
          {count}
          {count === maxInvoiceCount && (
            <Tooltip title="Special Customer">
              <StarFilled style={{ color: "#faad14", marginLeft: 8 }} />
            </Tooltip>
          )}
        </span>
      ),
    },
  ];

  return (
    <div>
      <Header />
      <div className="px-6">
        <h1 className="text-3xl font-bold text-center mb-4">Customers</h1>
        <Table
          dataSource={customerData}
          columns={columns}
          scroll={{ x: 1000, y: 300 }}
          pagination={false}
          bordered
          rowKey="customerPhone"
        ></Table>
      </div>
    </div>
  );
};

export default CustomerPage;
