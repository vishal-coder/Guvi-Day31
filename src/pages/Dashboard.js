import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    <div className="dashboardwrapper">
      <Sidebar />
      <div className="dashBoardBody">
        {" "}
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
