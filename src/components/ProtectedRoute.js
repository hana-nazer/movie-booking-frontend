import { message } from "antd";
import React, { useState, useEffect } from "react";
import { GetCurrentUser } from "../apicalls/users";

function ProtectedRoute(props) {
  const [user, setUser] = useState("");
  const getCurrentUser = async () => {
    try {
      const response = await GetCurrentUser();
      console.log(response.data);
      if (response.success) {
        alert("successsssss");
        setUser(response.data);
      } else {
        setUser(null);
        console.log(response.message)
        message.error(response.message);
      }
    } catch (error) {
      setUser(null);
      console.log(error.message)
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
