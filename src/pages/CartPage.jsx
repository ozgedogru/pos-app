import { Button, Card, Popconfirm, Table } from "antd";
import { useState } from "react";
import CreateInvoice from "../components/CreateInvoice";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { addItem, clearItem, removeItem } from "../features/cartSlice";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

const CartPage = () => {
  const { items, subTotal, taxRate, totalAmount } = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();

  const columns = [
    {
      title: "Product Image",
      dataIndex: "img",
      key: "img",
      width: "4%",
      render: (url) => {
        return (
          <img
            src={url}
            alt="product-image"
            className="w-full h-16 object-cover"
          />
        );
      },
    },
    {
      title: "Product Name",
      dataIndex: "title",
      key: "title",
      width: "8%",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      width: "8%",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: "8%",
      render: (price) => `${price} HUF`,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      width: "8%",
      render: (_, record) => {
        return (
          <div className="flex items-center">
            <Button
              className="rounded-full"
              icon={<MinusOutlined />}
              size="small"
              onClick={() => dispatch(removeItem(record))}
              disabled={record.quantity === 1}
            ></Button>
            <span className="mx-2">{record.quantity}</span>
            <Button
              className="rounded-full"
              icon={<PlusOutlined />}
              size="small"
              onClick={() => dispatch(addItem(record))}
            ></Button>
          </div>
        );
      },
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
      key: "totalPrice",
      width: "8%",
      render: (totalPrice) => `${totalPrice} HUF`,
    },
    {
      title: "Action",
      width: "12%",
      render: (_, record) => {
        return (
          <Popconfirm
            title="Are you sure you want to delete this item?"
            onConfirm={() => dispatch(clearItem(record))}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link" className="text-red pl-0">
              Delete
            </Button>
          </Popconfirm>
        );
      },
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Header />
      <div className="px-6">
        <Table dataSource={items} columns={columns} bordered></Table>
        <div className="cart-total flex justify-end mt-8">
          <Card className="w-72 shadow-lg">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>
                {subTotal === 0
                  ? "0 HUF"
                  : new Intl.NumberFormat("hu-HU", {
                      style: "currency",
                      currency: "HUF",
                    }).format(subTotal)}
              </span>
            </div>
            <div className="flex justify-between text-red">
              <span>VAT %{taxRate * 100}</span>
              <span>
                {subTotal * taxRate === 0
                  ? "0 HUF"
                  : "+" +
                    new Intl.NumberFormat("hu-HU", {
                      style: "currency",
                      currency: "HUF",
                    }).format(subTotal * taxRate)}
              </span>
            </div>
            <div className="flex justify-between text-xl border-t mt-2 pt-2">
              <b>Total</b>
              <span>
                {new Intl.NumberFormat("hu-HU", {
                  style: "currency",
                  currency: "HUF",
                }).format(totalAmount)}
              </span>
            </div>
            <Button
              className="mt-2 w-full bg-green-700 text-white border-none"
              size="large"
              type="primary"
              onClick={() => {
                setIsModalOpen(true);
              }}
              disabled={items.length === 0}
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
