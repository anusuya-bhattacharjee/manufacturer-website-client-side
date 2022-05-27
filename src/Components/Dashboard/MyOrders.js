import React, { useEffect, useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";
import { getAuth } from "firebase/auth";
import MyOrder from './MyOrder';

const auth = getAuth(app);

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);

useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${user && user.email}`)
          .then((res) => res.json())
          .then((data) => setOrders(data));
}, [user]);


const handleCancelButton = (id) => { 
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/order/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    }
  };



    return (
        <div className="grid md:grid-cols-2 gap-3">
            {
                orders.map(order => <MyOrder 
                key={order._id}
                order={order}
                handleCancelButton={handleCancelButton}
                ></MyOrder>)
            }
        </div>
    );
};

export default MyOrders;