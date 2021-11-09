import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Input, Button } from "antd";
import { resetPassword } from "../../slice/userAuthSlice";
import "./style.css";

function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  
const ResetPassword = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const query = useQuery();
  const token = query.get('token');

  const onFinish = (values) => {
    const resetData = {
      password: values.password,
      confirmPassword: values.confirmPassword,
      token,
    };
    dispatch(
      resetPassword(
        resetData,
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
        <h1 className="title">Đổi mật khẩu mới</h1>
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
          <div className="submit">
            <Button type="primary" htmlType="submit">
              Đổi mật khẩu
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ResetPassword;
