import { message } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetCurrentUser } from "../apicalls/users";
import { hideLoading, showLoading } from "../redux/loaders-slice";
import { setUser } from "../redux/usersSlice";

function ProtectedRoute(props) {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const getCurrentUser = async () => {
    try {
      dispatch(showLoading());
      const response = await GetCurrentUser();
      dispatch(hideLoading());
      if (response.success) {
        dispatch(setUser(response.data));
      } else {
        dispatch(setUser(null));
        message.error(response.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      dispatch(setUser(null));
      message.error(error.message);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getCurrentUser();
    } else {
      navigate("/login");
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    user && (
      <div className="layout p-1">
        <div className="header bg-primary flex justify-between p-2">
          <div>
            <h1 className="text-2xl text-white">BookMyMovie</h1>
          </div>
          <div className="bg-white p-1 flex gap-1">
            <i className="ri-shield-user-line text-primary mr-1"></i>
            <h1 className="text-sm">{user.name}</h1>
            <i
              className="ri-logout-circle-r-line ml-2"
              onClick={logoutHandler}
            ></i>
          </div>
        </div>
        <div className="content mt-1 p-1">{props.children}</div>
      </div>
    )
  );
}

export default ProtectedRoute;
