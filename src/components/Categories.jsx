import { Button, Form, Input, message, Modal } from "antd";
import axios from "axios";
import { useState } from "react";

const Categories = ({ categories }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/categories/add-category",
        values
      );
      message.success("A new category added!");
      form.resetFields();
      setIsModalOpen(false);
    } catch (error) {
      console.log(error);
      message.error("Failed to add category. Please try again.");
    }
  };

  return (
    <div>
      <ul className="flex md:flex-col items-center md:font-semibold md:text-lg text-sm gap-2">
        {categories.map((category, index) => (
          <li key={index} className="category-item">
            <span>{category.title}</span>
          </li>
        ))}
        <li
          className="category-item"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          + Add New Category
        </li>
        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onCancel={() => {
            setIsModalOpen(false);
          }}
          footer={null}
        >
          <Form layout="vertical" onFinish={onFinish} form={form}>
            <Form.Item
              label="Add Category"
              name="title"
              rules={[
                {
                  required: true,
                  message: "Category name cannot be empty.",
                },
              ]}
            >
              <Input placeholder="Enter category name" />
            </Form.Item>
            <Form.Item className="text-right">
              <Button type="primary" htmlType="submit">
                Create
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </ul>
    </div>
  );
};

export default Categories;
