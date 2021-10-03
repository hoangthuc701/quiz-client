import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Input, Button } from "antd";
import { signIn } from "../../slice/userAuthSlice";
import "./style.css";

const Login = () => {
   const dispatch = useDispatch();
   let history = useHistory();
   const onFinish = (values) => {
      const loginData = {
         username: "",
         password: "",
      };
      dispatch(
         signIn(
            loginData,
            () => {
               history.push("/");
            },
            () => {}
         )
      );
   };

   return (
      <div className="login-container">
         <div className="login">
            <h1 className="title">Đăng nhập</h1>
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
                  label="Tên đăng nhập"
                  name="username"
                  rules={[
                     {
                        required: true,
                        message: "Vui lòng nhập tên đăng nhập!",
                     },
                  ]}
               >
                  <Input />
               </Form.Item>
               <Form.Item
                  className="form-item"
                  label="Mật khẩu"
                  name="password"
                  rules={[
                     { required: true, message: "Vui lòng nhập mật khẩu!" },
                  ]}
               >
                  <Input.Password />
               </Form.Item>
               <div className="submit">
                  <Button type="primary" htmlType="submit">
                     Đăng nhập
                  </Button>
               </div>
            </Form>
         </div>
      </div>
   );
};

export default Login;
