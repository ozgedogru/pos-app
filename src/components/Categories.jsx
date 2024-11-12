import { Button, Form, Input, message, Modal, Table } from "antd";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../features/categoriesSlice";

const Categories = ({ onSelectCategory, selectedCategory }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingRow, setEditingRow] = useState({});

  const [addForm] = Form.useForm();
  const [editForm] = Form.useForm();

  const columns = [
    {
      title: "Category Title",
      dataIndex: "title",
      render: (_, record) => {
        if (record._id === editingRow._id) {
          return (
            <Form.Item className="mb-0" name="title">
              <Input defaultValue={record.title} />
            </Form.Item>
          );
        } else {
          return <p>{record.title}</p>;
        }
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => {
        return (
          <div>
            <Button
              type="link"
              className="text-blue font-semibold pl-0"
              onClick={() => setEditingRow(record)}
            >
              Edit
            </Button>
            <Button
              type="text"
              className="text-navy font-semibold"
              htmlType="submit"
            >
              Save
            </Button>
            <Button
              type="text"
              className="text-red font-semibold"
              onClick={() => confirmDeleteCategory(record._id)}
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  const onAddFinish = async (values) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/categories/add-category",
        values
      );
      dispatch(fetchCategories());
      message.success(res.data);
      addForm.resetFields();
      setIsAddModalOpen(false);
    } catch (error) {
      console.log(error);
      message.error("Failed to add category. Please try again.");
    }
  };

  const onEditFinish = async (values) => {
    try {
      const res = await axios.put(
        "http://localhost:5000/api/categories/update-category",
        { ...values, categoryId: editingRow._id }
      );
      dispatch(fetchCategories());
      message.success(res.data);
      editForm.resetFields();
      setIsEditModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCategory = async (id) => {
    try {
      const res = await axios.delete(
        "http://localhost:5000/api/categories/delete-category",
        { data: { categoryId: id } }
      );
      dispatch(fetchCategories());
      message.success(res.data);
      setIsEditModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const confirmDeleteCategory = (id) => {
    Modal.confirm({
      title: "Are you sure you want to delete this category?",
      content: "This action cannot be undone.",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk: () => deleteCategory(id),
    });
  };

  return (
    <div>
      <ul className="flex md:flex-col items-center md:font-semibold md:text-lg text-sm gap-2">
        {categories.map((category, index) => (
          <li
            onClick={() => onSelectCategory(category.title)}
            key={index}
            className={`category-item ${
              selectedCategory === category.title ? "!bg-orange-950" : ""
            }`}
          >
            <span>{category.title}</span>
          </li>
        ))}
        <li
          className="category-item"
          onClick={() => {
            setIsAddModalOpen(true);
          }}
        >
          + Add New Category
        </li>
        <li
          className="category-item"
          onClick={() => {
            setIsEditModalOpen(true);
          }}
        >
          Edit Category
        </li>
        <Modal
          title="Add New Category"
          open={isAddModalOpen}
          onCancel={() => {
            setIsAddModalOpen(false);
          }}
          footer={null}
        >
          <Form layout="vertical" onFinish={onAddFinish} form={addForm}>
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
        <Modal
          title="Edit Category"
          open={isEditModalOpen}
          onCancel={() => {
            setIsEditModalOpen(false);
          }}
          footer={null}
        >
          <Form onFinish={onEditFinish} form={editForm}>
            <Table
              bordered
              dataSource={categories}
              columns={columns}
              rowKey={"_id"}
              pagination={false}
            />
          </Form>
        </Modal>
      </ul>
    </div>
  );
};

export default Categories;
