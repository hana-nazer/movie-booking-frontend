import React from "react";
import { Form } from "antd";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

function Register() {
  const onFinish = (values) => {
    console.log("Succes", values);
  };
  return (
    <div className="flex justify-center h-screen items-center bg-primary">
      <div className="card p-3  W-400">
        <h1 className="text-xl mb-1">Book My Movie  -Register</h1>
        <hr />
        <Form layout="vertical" className="mt-1" onFinish={onFinish}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Enter your name" }]}
          >
            <input type="text" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Enter your email address" }]}
          >
            <input type="email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Enter the password" }]}
          >
            <input type="password" />
          </Form.Item>
          <div className="mt-2 gap-1 flex flex-col">
            <Button title="REGISTER" type="submit" />
            <Link to="/login" className="text-primary mt-1">
              Already have an account?Login
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
