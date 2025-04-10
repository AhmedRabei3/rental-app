import React from "react";
import "./TopHeader.css";
import HeaderRigth from "./HeaderRigth";
import Navbar from "./NavBar";
import { useNavigate } from "react-router-dom";

function TopHeader() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="left-header">
        <div onClick={() => navigate("/")} className="logo">
          <i className="bi bi-key"></i> Rental
        </div>
        <div className="header-menu">
          <i className="bi bi-list"></i>
        </div>
      </div>
      <Navbar />
      <HeaderRigth />
    </div>
  );
}

export default TopHeader;
