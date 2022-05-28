import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        <p className="font-black dark:text-white text-4xl text-stone-600 mb-10">
          {" "}
          Welcome to Dashboard
        </p>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard/my-orders">My Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/add-review">Add a Review</Link>
          </li>
          <li>
            <Link to="/dashboard/my-profile">My Profile</Link>
          </li>
          <li>
            <Link to="/dashboard/users">All Users</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
