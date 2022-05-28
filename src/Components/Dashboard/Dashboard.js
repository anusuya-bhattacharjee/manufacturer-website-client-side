import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import app from '../../firebase.init';
import useAdmin from "../../hooks/useAdmin";

const auth = getAuth(app);

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <p className="font-black dark:text-white text-4xl text-stone-600 mb-10">
          {" "}
          Welcome to Dashboard
        </p>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          { admin === false &&  
          <li>
            <Link to="/dashboard/my-orders">My Orders</Link>
          </li> 
          }

         {admin === false &&  
         <li>
            <Link to="/dashboard/add-review">Add a Review</Link>
          </li> 
          }
         
          <li>
            <Link to="/dashboard/my-profile">My Profile</Link>
          </li>

          { admin && 
            <li>
          <Link to="/dashboard/users">All Users</Link>
           </li>
           }
           { admin && 
            <li>
          <Link to="/dashboard/addtool">Add a Tool</Link>
           </li>
           }
          
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
