import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user);
  if (user.value.email) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;
