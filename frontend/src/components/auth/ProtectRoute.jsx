import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = ({ children, user, redirect = "/home" }) => {
  if (!user) return <Navigate to={redirect} />;

  return children ? children : <Outlet />;
};

export default ProtectRoute;
