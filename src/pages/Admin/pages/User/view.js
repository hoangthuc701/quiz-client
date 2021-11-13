import React, { useEffect, useState } from "react";
import { Avatar, Form, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { getUser } from "../../slice/usersSlice";
import { useParams } from "react-router";
import "./style.css";

const UserView = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [user, setUser] = useState({});
  const { userId } = useParams();
  useEffect(() => {
    dispatch(
      getUser({id:userId},
      (data) => {
        console.log(data);
        form.setFieldsValue(data.user);
        setUser(data.user);
      },
      () => {}
    ));
  }, [dispatch, form, userId]);

  return (
    <div className="profile-container">
      <div className="avatar-information">
        <div className="user-avatar">
          <Avatar
            shape="square"
            size={200}
            icon={<UserOutlined />}
            src={user.avatarUrl}
          />
        </div>
        <div className="user-information">
          <div className="username">{user.fullname}</div>
          <div className="user-description">{user.description}</div>
        </div>
      </div>
      <div className="tab-information">
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          autoComplete="off"
        >
          <Form.Item
            className="form-item"
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập email!",
              },
            ]}
          >
            <Input disabled={true} />
          </Form.Item>

          <Form.Item
            className="form-item"
            label="Họ tên"
            name="fullname"
            rules={[{ required: true, message: "Vui lòng nhập họ tên!" }]}
          >
            <Input disabled={true} />
          </Form.Item>

          <Form.Item
            className="form-item"
            label="Điện thoại"
            name="phone"
            rules={[
              { required: true, message: "Vui lòng nhập số điện thoại!" },
            ]}
          >
            <Input disabled={true} />
          </Form.Item>

          <Form.Item
            className="form-item"
            label="Mô tả"
            name="description"
            rules={[{ required: true, message: "Vui lòng nhập mô tả!" }]}
          >
            <Input.TextArea disabled={true} />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default UserView;
