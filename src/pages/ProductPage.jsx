import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Button, Form, Input, message, Modal, Select, Table } from "antd";
import axios from "axios";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState({});

  const [editForm] = Form.useForm();

  const columns = [
    {
      title: "Product Name",
      dataIndex: "title",
      width: "8%",
      render: (_, record) => {
        return <p>{record.title}</p>;
      },
    },
    {
      title: "Product Image",
      dataIndex: "img",
      width: "4%",
      render: (_, record) => {
        return (
          <img
            className="w-20 h-20 object-cover"
            alt="product-img"
            src={record.img}
          ></img>
        );
      },
    },
    { title: "Product Price", dataIndex: "price", width: "8%" },
    { title: "Category", dataIndex: "category", width: "8%" },
    {
      title: "Action",
      dataIndex: "action",
      width: "8%",
      render: (_, record) => {
        return (
          <div className="flex">
            <Button
              type="link"
              className="text-blue font-semibold pl-0"
              onClick={() => {
                setIsEditModalOpen(true);
                onEditClick(record);
              }}
            >
              Edit
            </Button>
            <Button
              type="text"
              className="text-red font-semibold"
              onClick={() => confirmDeleteProduct(record._id)}
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  const onEditClick = (record) => {
    setIsEditModalOpen(true);
    setEditingProduct(record);
    editForm.setFieldsValue(record);
  };

  const onEditFinish = async (values) => {
    try {
      const res = await axios.put(
        "http://localhost:5000/api/products/update-product",
        { ...values, productId: editingProduct._id }
      );
      message.success(res.data);
      editForm.resetFields();
      setIsEditModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete("http://localhost:5000/api/products/delete-product", {
        data: { productId: id },
      });
      message.success("Product deleted successfully.");
    } catch (error) {
      console.error(error);
    }
  };

  const confirmDeleteProduct = (id) => {
    Modal.confirm({
      title: "Are you sure you want to delete this product?",
      content: "This action cannot be undone.",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk: () => deleteProduct(id),
    });
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

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/categories/get-all"
        );
        setCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, [categories]);

  return (
    <div>
      <Header />
      <div className="px-6">
        <h1 className="text-3xl font-bold text-center mb-4">Products</h1>
        <Table
          bordered
          dataSource={products}
          columns={columns}
          rowKey={"_id"}
          pagination={false}
          scroll={{ x: 1000, y: 600 }}
        />
      </div>
      <Modal
        title="Edit Product"
        open={isEditModalOpen}
        onCancel={() => {
          setIsEditModalOpen(false);
        }}
        footer={null}
      >
        <Form
          layout="vertical"
          onFinish={onEditFinish}
          form={editForm}
          initialValues={editingProduct}
        >
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
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ProductPage;
