import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Input, Button } from "antd";
import { signUp } from "../../slice/userAuthSlice";
import "./style.css";

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onFinish = (values) => {
    const registerData = {
      email: values.email,
      phone: values.phone,
      password: values.password,
      fullname: values.fullname,
      confirmPassword: values.confirmPassword,
    };
    dispatch(
      signUp(
        registerData,
        () => {
          history.push("/user/login");
        },
        () => {}
      )
    );
  };

  return (
    <div className="register-container">
      <div className="register">
        <h1 className="title">Đăng ký</h1>
        <Form
          name="basic"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
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
            <Input />
          </Form.Item>

          <Form.Item
            className="form-item"
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            className="form-item"
            label="Nhập lại mật khẩu"
            name="confirmPassword"
            rules={[{ required: true, message: "Vui lòng nhập lại mật khẩu!" }]}
          >
            <Input.Password />
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
              Đăng ký
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
