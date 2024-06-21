import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

function PrivateRoute({ children }) {
  const isAuthenticated = !!Cookies.get('accessToken')
  console.log(isAuthenticated)
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
