import { Button, Table } from "antd";
import { useEffect, useState } from "react";
import PrintInvoice from "../components/PrintInvoice";
import Header from "../components/Header";
import axios from "axios";

const InvoicePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [customer, setCustomer] = useState({});

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
      title: "Creation Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => {
        return <span>{text.substring(0, 10)}</span>;
      },
    },
    {
      title: "Payment Method",
      dataIndex: "paymentMode",
      key: "paymentMode",
    },
    {
      title: "Total Price",
      dataIndex: "total",
      key: "total",
      render: (totalPrice) => `${totalPrice} HUF`,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <Button
          onClick={() => {
            setIsModalOpen(true);
            setCustomer(record);
          }}
        >
          Print
        </Button>
      ),
    },
  ];

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

  return (
    <div>
      <Header />
      <div className="px-6">
        <h1 className="text-3xl font-bold text-center mb-4">Invoices</h1>
        <Table
          dataSource={dataSource}
          columns={columns}
          scroll={{ x: 1000, y: 300 }}
          pagination={false}
          bordered
        ></Table>
        <div className="cart-total flex justify-end mt-8">
          <PrintInvoice
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            customer={customer}
          />
        </div>
      </div>
    </div>
  );
};

export default InvoicePage;
