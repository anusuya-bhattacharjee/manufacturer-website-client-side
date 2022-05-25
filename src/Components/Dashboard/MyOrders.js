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
}, []);

    return (
        <div>
            {
                orders.map(order => <MyOrder 
                key={order._id}
                order={order}></MyOrder>)
            }
        </div>
    );
};

export default MyOrders;