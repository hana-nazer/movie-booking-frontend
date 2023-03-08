import React from "react";
import { Form, message } from "antd";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { RegisterUser } from "../../apicalls/users";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { hideLoading, showLoading } from "../../redux/loaders-slice";

function Register() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onFinish = async (values) => {
    try {
      dispatch(showLoading())
      const response = await RegisterUser(values);
      dispatch(hideLoading())
      if (response.success) {
        message.success(response.message);
        
       
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(hideLoading())
      message.error(error.message);
    }
  };

  useEffect(()=>{
    if(localStorage.getItem('token')){
      navigate('/')
    }
  })
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
