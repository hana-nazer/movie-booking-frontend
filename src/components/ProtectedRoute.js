import { message } from "antd";
import React, { useState, useEffect } from "react";
import { GetCurrentUser } from "../apicalls/users";

function ProtectedRoute(props) {
  const [user, setUser] = useState("");
  const getCurrentUser = async () => {
    try {
      const response = await GetCurrentUser();
      if (response.success) {
        setUser(response.data);
      } else {
        setUser(null);
        message.error(response.message);
      }
    } catch (error) {
      setUser(null);
      message.error(error.message);
    }
  };
  useEffect(() => {
    getCurrentUser();
  }, []);
  return user && <div>
    {user.name}
    {props.children}</div>;
}

export default ProtectedRoute;
