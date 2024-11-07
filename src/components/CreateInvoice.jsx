import { Button, Card, Form, Input, Modal, Select } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const CreateInvoice = ({ isModalOpen, setIsModalOpen }) => {
  const { Option } = Select;
  const onFinish = (values) => {
    console.log("values: ", values);
  };

  const { items, subTotal, taxRate, totalAmount } = useSelector(
    (state) => state.cart
  );

  return (
    <div>
      <Modal
        title="Create Invoice"
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        footer={false}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Full Name"
            name={"fullName"}
            rules={[{ required: true, message: "Please enter the full name." }]}
          >
            <Input placeholder="Enter full name"></Input>
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name={"phoneNumber"}
            rules={[
              { required: true, message: "Please enter the phone number." },
              {
                pattern: /^[0-9]+$/,
                message: "Phone number can only contain numbers.",
              },
            ]}
          >
            <Input
              placeholder="Enter phone number"
              minLength={10}
              maxLength={10}
            ></Input>
          </Form.Item>
          <Form.Item
            label="Payment Method"
            name={"paymentMethod"}
            rules={[
              { required: true, message: "Please select a payment method." },
            ]}
          >
            <Select placeholder="Select payment method">
              <Option value="creditCard">Credit Card</Option>
              <Option value="paypal" disabled>
                PayPal (Unavailable)
              </Option>
              <Option value="cash">Cash</Option>
            </Select>
          </Form.Item>
          <Card>
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
            <div className="flex justify-end">
              <Button
                type="primary"
                className="mt-4 text-white border-none"
                size="large"
                htmlType="submit"
              >
                Create Order
              </Button>
            </div>
          </Card>
        </Form>
      </Modal>
    </div>
  );
};

export default CreateInvoice;
