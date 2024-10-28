import { Button, Table } from "antd";
import { useState } from "react";
import PrintInvoice from "../components/PrintInvoice";

const InvoicePage = () => {
  const dataSource = [
    {
      key: "1",
      customerName: "John Doe",
      phoneNumber: "+1 (555) 123-4567",
      creationDate: "2023-10-01",
      paymentMethod: "Credit Card",
      totalPrice: 150.0,
      action: "Edit/Delete",
    },
    {
      key: "2",
      customerName: "Jane Smith",
      phoneNumber: "+1 (555) 987-6543",
      creationDate: "2023-10-05",
      paymentMethod: "Cash",
      totalPrice: 200.0,
      action: "Edit/Delete",
    },
    {
      key: "3",
      customerName: "Emily Johnson",
      phoneNumber: "+1 (555) 333-2222",
      creationDate: "2023-10-10",
      paymentMethod: "Bank Transfer",
      totalPrice: 300.0,
      action: "Edit/Delete",
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
      title: "Creation Date",
      dataIndex: "creationDate",
      key: "creationDate",
    },
    {
      title: "Payment Method",
      dataIndex: "paymentMethod",
      key: "paymentMethod",
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (totalPrice) => `${totalPrice.toFixed(2)} HUF`,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: () => (
        <Button onClick={() => setIsModalOpen(true)}>Yazdır</Button>
      ),
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="px-6">
      <h1 className="text-3xl font-bold text-center mb-4">Invoices</h1>
      <Table dataSource={dataSource} columns={columns} bordered></Table>
      <div className="cart-total flex justify-end mt-8">
        <PrintInvoice
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
    </div>
  );
};

export default InvoicePage;
