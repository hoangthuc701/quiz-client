import React from "react";
import { Result, Button } from "antd";

const Error = () => (
  <Result
    status="404"
    title="404"
    subTitle="Nội dung không tồn tại!"
    extra={<Button type="primary">Về trang chủ</Button>}
  />
);

export default Error;
