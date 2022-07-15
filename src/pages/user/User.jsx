import React from "react";
import "./user.css";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/common/Sidebar/Sidebar";

const User = () => {
  return (
    <>
      <div className="sidesreen">
        <div className="sidebarpastor">
          <Sidebar />
        </div>

        <div className="outlets">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default User;
