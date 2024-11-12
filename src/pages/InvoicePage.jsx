import { Button, Spin, Table } from "antd";
import { useEffect, useState } from "react";
import PrintInvoice from "../components/PrintInvoice";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";
import { fetchInvoices } from "../features/invoiceSlice";

const InvoicePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customer, setCustomer] = useState({});

  const { invoices, loading } = useSelector((state) => state.invoices);
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
    <div>
      <Header />
      <div className="px-6">
        <h1 className="text-3xl font-bold text-center mb-4">Invoices</h1>
        {loading ? (
          <div className="flex justify-center items-center h-[300px]">
            <Spin indicator={antIcon} />
          </div>
        ) : (
          <Table
            dataSource={invoices}
            columns={columns}
            scroll={{ x: 1000, y: 300 }}
            pagination={false}
            bordered
            rowKey="_id"
          ></Table>
        )}
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
