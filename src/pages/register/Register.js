import React from "react";
import { Form, message } from "antd";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { RegisterUser } from "../../apicalls/users";

function Register() {
  const onFinish = async (values) => {
    try {
      const response = await RegisterUser(values);
      if (response.success) {
        message.success(response.message);
        
       
      } else {
        message.error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };
  return (
    <div className="flex justify-center h-screen items-center bg-primary">
      <div className="card p-3  W-400">
        <h1 className="text-xl mb-1">Book My Movie -Register</h1>
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
            <Button title="REGISTER" htmlType="submit" />
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
