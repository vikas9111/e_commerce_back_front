import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import Home from './Home';
import SignUp from "./SignUp";
import Login from './Login';

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/Home" element={<Home />} >
            Home
          </NavLink>
          <NavLink to="/sign_up" element={<SignUp />} >
            Sign Up
          </NavLink>
          <NavLink to="/login" element={<Login />} >
            Login
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
 
export default NavBar;

