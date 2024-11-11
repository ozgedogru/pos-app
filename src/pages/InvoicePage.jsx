import { Button, Table } from "antd";
import { useEffect, useState } from "react";
import PrintInvoice from "../components/PrintInvoice";
import Header from "../components/Header";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setInvoices } from "../features/invoiceSlice";

const InvoicePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customer, setCustomer] = useState({});

  const dispatch = useDispatch();

  const { invoices } = useSelector((state) => state.invoices);
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
      sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
      defaultSortOrder: "descend",
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
      render: (totalPrice) => {
        const formattedPrice = new Intl.NumberFormat("hu-HU", {
          style: "currency",
          currency: "HUF",
        }).format(totalPrice);
        return formattedPrice;
      },
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
        dispatch(setInvoices(res.data));
      } catch (error) {
        console.log(error);
      }
    };
    getInvoices();
  }, [dispatch]);

  return (
    <div>
      <Header />
      <div className="px-6">
        <h1 className="text-3xl font-bold text-center mb-4">Invoices</h1>
        <Table
          dataSource={invoices}
          columns={columns}
          scroll={{ x: 1000, y: 300 }}
          pagination={false}
          bordered
          rowKey="_id"
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
