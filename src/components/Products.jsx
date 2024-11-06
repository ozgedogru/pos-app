import { Button, Form, Input, message, Modal, Select } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

const Products = ({ categories }) => {
  const [products, setProducts] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [addForm] = Form.useForm();

  const onAddFinish = async (values) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/products/add-product",
        values
      );
      message.success(res.data);
      addForm.resetFields();
      setIsAddModalOpen(false);
    } catch (error) {
      console.log(error);
      message.error("Failed to add category. Please try again.");
    }
  };

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/products/get-all"
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProducts();
  }, [products]);

  return (
    <div className="grid grid-cols-card gap-4">
      {products.map((product, index) => (
        <div
          key={index}
          className="product-card border rounded-md shadow-md cursor-pointer select-none"
        >
          <div className="product-img">
            <img
              src={product.img}
              alt="product"
              className="h-28 object-cover w-full rounded-t-md"
            ></img>
          </div>
          <div className="product-info flex flex-col items-center py-1">
            <span>{product.name}</span>
            <span>{product.price} Ft</span>
          </div>
        </div>
      ))}
      <div className="product-card border rounded-md shadow-md cursor-pointer select-none">
        <Button
          type="primary"
          className="w-full h-full font-semibold"
          onClick={() => {
            setIsAddModalOpen(true);
          }}
        >
          + Add Product
        </Button>
      </div>
      <div className="product-card border rounded-md shadow-md cursor-pointer select-none">
        <Button type="primary" className="w-full h-full font-semibold">
          Edit Product
        </Button>
      </div>
      <Modal
        title="Add New Product"
        open={isAddModalOpen}
        onCancel={() => {
          setIsAddModalOpen(false);
        }}
        footer={null}
      >
        <Form layout="vertical" onFinish={onAddFinish} form={addForm}>
          <Form.Item
            label="Product Name"
            name="title"
            rules={[
              {
                required: true,
                message: "Please enter the product title.",
              },
            ]}
          >
            <Input placeholder="Enter product name" />
          </Form.Item>
          <Form.Item
            label="Product Image URL"
            name="img"
            rules={[
              {
                required: true,
                message: "Please provide a URL for the product image.",
              },
            ]}
          >
            <Input placeholder="Enter product image URL" />
          </Form.Item>
          <Form.Item
            label="Product Price"
            name="price"
            rules={[
              {
                required: true,
                message: "Please enter the product price.",
              },
            ]}
          >
            <Input placeholder="Enter product price" />
          </Form.Item>
          <Form.Item
            label="Product Category"
            name="category"
            rules={[
              {
                required: true,
                message: "Please specify the product category.",
              },
            ]}
          >
            <Select placeholder="Select a category" style={{ width: "100%" }}>
              {categories.map((category) => (
                <Select.Option key={category._id} value={category.title}>
                  {category.title}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item className="text-right">
            <Button type="primary" htmlType="submit">
              Create
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Products;
