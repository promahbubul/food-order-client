import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthProvider";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location.pathname);
  if (loading) {
    <span className="loading loading-lg loading-spinner text-primary"></span>;
  }
  if (user) {
    // console.log("Privet Route", user);
    return children;
  }
  return <Navigate state={location.pathname} to="/signin" />;
};

export default PrivetRoute;
