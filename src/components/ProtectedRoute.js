import { message } from "antd";
import React, {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { GetCurrentUser } from "../apicalls/users";
import { hideLoading, showLoading } from "../redux/loaders-slice";
import { setUser } from "../redux/usersSlice";

function ProtectedRoute(props) {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const getCurrentUser = async () => {
    try {
      dispatch(showLoading())
      const response = await GetCurrentUser();
      dispatch(hideLoading())
      if (response.success) {
        dispatch(setUser(response.data));
      } else {
        dispatch(setUser(null));
        message.error(response.message);
      }
    } catch (error) {
      dispatch(hideLoading())
      dispatch(setUser(null));
      message.error(error.message);
    }
  };
  useEffect(() => {
    if(localStorage.getItem('token')){
      getCurrentUser();

    }else{
    navigate('/login')
    }
  });
  return (
    user && (
      <div>
        {user.name}
        {props.children}
      </div>
    )
  );
}

export default ProtectedRoute;
