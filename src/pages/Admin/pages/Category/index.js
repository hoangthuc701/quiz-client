import React, { useEffect, useState } from "react";
import { Table, Space, Button, Popconfirm, Modal, Form, Input } from "antd";
import {
  getAllCategory,
  updateCategory,
  deleteCategory,
  addCategory,
} from "../../slice/categorySlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Category = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalData, setModalData] = useState({
    title: "Thêm mới danh mục",
    body: {},
    visible: false,
    isEdit: false,
  });

  const handleOk = () => {
    const data = form.getFieldValue();
    setConfirmLoading(true);
    const categoryAction = modalData.isEdit ? updateCategory : addCategory;
    dispatch(
      categoryAction(
        data,
        () => {
          setModalData({ visible: false, isEdit: false });
          setConfirmLoading(false);
        },
        () => {
          setConfirmLoading(false);
        }
      )
    );
  };

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  const handleCancel = () => {
    setModalData({
      visible: false,
      isEdit: false,
    });
  };

  const handleEdit = (record) => {
    setModalData({
      title: "Cập nhật danh mục",
      body: { ...record },
      visible: true,
      isEdit: true,
    });
  };

  const handleAdd = () => {
    setModalData({
      title: "Thêm mới danh mục",
      body: {
        title: "",
        description: "",
      },
      visible: true,
      isEdit: false,
    });
  };

  useEffect(() => {
    form.setFieldsValue(modalData.body);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalData.body]);

  const handleDelete = (record) => {
    let data = { ...record };
    data.active = false;
    dispatch(deleteCategory(data, ()=>{}, ()=>{}));
  };
  const columns = [
    {
      title: "Tên danh mục",
      dataIndex: "title",
      key: "title",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleEdit(record)}>
            Chỉnh sửa
          </Button>

          <Popconfirm
            title="Bạn có chắc chắn muốn xóa mục này?"
            onConfirm={() => handleDelete(record)}
          >
            <Button type="primary" danger>
              Xóa
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const data = useSelector((state) => state.category.categories);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1> Quản lý danh mục </h1>
        <Button type="primary" style={{ margin: "5px" }} onClick={handleAdd}>
          Thêm mới danh mục
        </Button>
      </div>

      <Table columns={columns} dataSource={data} />
      <Modal
        title={modalData.title}
        visible={modalData.visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form
          name="category"
          form={form}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <Form.Item
            label="Tên danh mục"
            name="title"
            rules={[{ required: true, message: "Vui lòng nhập tiêu đề!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Mô tả"
            name="description"
            rules={[{ required: true, message: "Vui lòng nhập mô tả!" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Category;
