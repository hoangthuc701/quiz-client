import React, { useEffect, useState } from "react";
import { Avatar, Form, Input, Button, Tabs } from "antd";
import { UserOutlined } from "@ant-design/icons";
import {
  updatePassword,
  updateUserInformation,
  getUserInformation,
} from "../../slice/userAuthSlice";
import { useDispatch } from "react-redux";
import "./style.css";

const { TabPane } = Tabs;

const Profile = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [user, setUser] = useState({});

  useEffect(() => {
    dispatch(
      getUserInformation(
        (data) => {
          form.setFieldsValue(data.user);
          setUser(data.user);
        },
        () => {}
      )
    );
  }, [dispatch, form]);
  const onFinish2 = (values) => {
    const resetData = {
      password: values.password,
      confirmPassword: values.confirmPassword,
      oldPassword: values.oldPassword,
    };
    dispatch(
      updatePassword(
        resetData,
        () => {},
        () => {}
      )
    );
  };

  const onFinish1 = (values) => {
    const resetData = {
      fullname: values.fullname,
      phone: values.phone,
      email: values.email
    };
    dispatch(
      updateUserInformation(
        resetData,
        () => {},
        () => {}
      )
    );
  };

  return (
    <div className="profile-container">
      <div className="avatar-information">
        <Avatar
          className="user-avatar"
          shape="square"
          size={200}
          icon={<UserOutlined />}
        />
        <div className="user-information">
          <div className="username">{user.fullname}</div>
          <div className="user-description">Fullstack Developer</div>
        </div>
      </div>
      <div className="tab-information">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Thông tin cá nhân" key="1">
            <Form
              form={form}
              name="basic"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              onFinish={onFinish1}
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
                <Input />
              </Form.Item>

              <Form.Item
                className="form-item"
                label="Điện thoại"
                name="phone"
                rules={[
                  { required: true, message: "Vui lòng nhập số điện thoại!" },
                ]}
              >
                <Input />
              </Form.Item>

              <div className="submit">
                <Button type="primary" htmlType="submit">
                  Cập nhật thông tin
                </Button>
              </div>
            </Form>
          </TabPane>
          <TabPane tab="Thay đổi mật khẩu" key="2">
            <Form
              name="basic"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              initialValues={{ remember: true }}
              onFinish={onFinish2}
              autoComplete="off"
            >
              <Form.Item
                className="form-item"
                label="Mật khẩu hiện tại"
                name="oldPassword"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập mật khẩu hiện tại!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                className="form-item"
                label="Mật khẩu"
                name="password"
                rules={[
                  { required: true, message: "Vui lòng nhập mật khẩu mới!" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                className="form-item"
                label="Nhập lại mật khẩu"
                name="confirmPassword"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập lại mật khẩu mới!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <div className="submit">
                <Button type="primary" htmlType="submit">
                  Cập nhật mật khẩu
                </Button>
              </div>
            </Form>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
