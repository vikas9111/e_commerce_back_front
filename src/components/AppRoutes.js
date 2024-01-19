// Routes.js
import React from "react";
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";
import Login from "./Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/sign_up" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default AppRoutes;
