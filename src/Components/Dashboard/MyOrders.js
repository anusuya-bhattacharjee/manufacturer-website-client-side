import React, { useEffect, useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import MyOrder from './MyOrder';
import { useNavigate } from 'react-router-dom';

const auth = getAuth(app);

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

useEffect(() => {
        fetch(`https://manufacturer-website-rupsa23.onrender.com/myOrders/${user && user.email}`, {
          method: 'GET',
          headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
          }
        })
          .then((res) => {
            console.log('res', res);
            if(res.status === 401 || res.status === 403){
              signOut(auth);
              localStorage.removeItem('accessToken');
              navigate('/home');
                  }
            return res.json()})
          .then((data) => setOrders(data));
}, [user]);




const handleCancelButton = (id) => { 
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      const url = `https://manufacturer-website-rupsa23.onrender.com/order/${id}`;
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