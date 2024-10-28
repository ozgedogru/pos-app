import { Button, Card, Table } from "antd";
import { useState } from "react";
import CreateInvoice from "../components/CreateInvoice";
import Header from "../components/Header";

const CartPage = () => {
  const dataSource = [
    {
      productName: "Apple",
      category: "Fruits",
      price: 12,
      quantity: 3,
      totalPrice: 36,
      action: "Edit/Delete",
    },
    {
      productName: "Banana",
      category: "Fruits",
      price: 8,
      quantity: 5,
      totalPrice: 40,
      action: "Edit/Delete",
    },
    {
      productName: "Milk",
      category: "Dairy Products",
      price: 15,
      quantity: 2,
      totalPrice: 30,
      action: "Edit/Delete",
    },
    {
      productName: "Carrot",
      category: "Vegetables",
      price: 5,
      quantity: 6,
      totalPrice: 30,
      action: "Edit/Delete",
    },
  ];
  const columns = [
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `${price} HUF`,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (totalPrice) => `${totalPrice} HUF`,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Header />
      <div className="px-6">
        <Table dataSource={dataSource} columns={columns} bordered></Table>
        <div className="cart-total flex justify-end mt-8">
          <Card className="w-72 shadow-lg">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>100.00 HUF</span>
            </div>
            <div className="flex justify-between">
              <span>VAT (%18)</span>
              <span className="text-red">+18.00 HUF</span>
            </div>
            <div className="flex justify-between mt-2">
              <b>Total</b>
              <b>118.00 HUF</b>
            </div>
            <Button
              className="mt-2 w-full bg-green-700 text-white border-none"
              size="large"
              type="primary"
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              Create Order
            </Button>
          </Card>
          <CreateInvoice
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
