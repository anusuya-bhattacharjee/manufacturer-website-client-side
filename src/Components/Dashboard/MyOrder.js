import React from "react";
import { Link } from "react-router-dom";

const MyOrder = (props) => {
  const {
    _id,
    name,
    price,
    quantity,
    userName,
    userPhone,
    userAddress,
    isPaid
  } = props.order;


  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Total Price: {price}</p>
        <p>Total Quantity: {quantity}</p>
        <p>Your Name: {userName}</p>
        <p>Your Address: {userAddress}</p>
        <p>Your Number: {userPhone}</p>
        
        <div className="flex">
        <div className="card-actions">
        <button disabled={isPaid === true}  className="btn btn-primary mr-2" onClick={() => props.handleCancelButton(_id)}>Cancel</button> 
        </div>
        <div className="card-actions">
        <Link to={`/dashboard/payment/${_id}`}><button disabled={isPaid === true} className="btn btn-primary">Pay Now</button></Link>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default MyOrder;
