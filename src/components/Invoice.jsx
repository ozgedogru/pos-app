import { Button, Card, Form, Input, Modal, Select } from "antd";
import React from "react";

const Invoice = ({ isModalOpen, setIsModalOpen }) => {
  const { Option } = Select;
  const onFinish = (values) => {
    console.log("values: ", values);
  };
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
            <div className="flex justify-end">
              <Button
                type="primary"
                className="mt-4 bg-green-700 text-white border-none"
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

export default Invoice;
