import React, { useEffect } from "react";
import { Form, message } from "antd";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser } from "../../apicalls/users";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../redux/loaders-slice";
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const onFinish = async (values) => {
    try {
      dispatch(showLoading())
      const response = await LoginUser(values);
      dispatch(hideLoading())
      if (response.success) {
        message.success(response.message);
        localStorage.setItem("token", response.data);

        window.location.href = '/'
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
        <h1 className="text-xl mb-1">Book My Movie-Login</h1>
        <hr />
        <Form layout="vertical" className="mt-1" onFinish={onFinish}>
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
            <Button title="LOGIN" type="submit" />
            <Link to="/register" className="text-primary mt-1">
              Don't have an account? Register
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
