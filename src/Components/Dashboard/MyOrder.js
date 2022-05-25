import React from "react";

const MyOrder = (props) => {
  const {
    toolId,
    name,
    price,
    quantity,
    userName,
    userEmail,
    userPhone,
    userAddress,
    isPaid, 
    iscancelled
  } = props.order;

  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body items-center text-center">
        <h2 class="card-title">{name}</h2>
        <p>Total Price: {price}</p>
        <p>Total Quantity: {quantity}</p>
        <p>Your Name: {userName}</p>
        <p>Your Address: {userAddress}</p>
        <p>Your Number: {userPhone}</p>
        
        <div className="flex">
        <div className="card-actions">
          <button className="btn btn-primary mr-2">Cancel</button>
        </div>
        <div className="card-actions">
          <button className="btn btn-primary">Pay Now</button>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default MyOrder;
