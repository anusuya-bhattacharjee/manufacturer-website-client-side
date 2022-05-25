import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";
import { getAuth } from "firebase/auth";

const auth = getAuth(app);

const Purchase = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [tool, setTool] = useState({});
  const [qty, setQty] = useState();


  useEffect(() => {
    const url = `http://localhost:5000/tool/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, []);


  const handleMyOrders = (event) => {
    const toolId = id;
    const name = tool.name;
    const price = qty * tool.price;
    const quantity = event.target.quantity.value;
    const userName = user && user.displayName;
    const userEmail = user && user.email;
    const userPhone = event.target.phone.value;
    const userAddress = event.target.address.value;
    const isPaid = false;
    const iscancelled = false;

    const orderItem = {toolId, name, price, quantity, userName, userEmail, userPhone, userAddress, isPaid, iscancelled};


    fetch("http://localhost:5000/addOrderItem", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Your Order added successfully!!");
        event.target.reset();
      });

  }

  const decreaseQty = () => {
    if (qty <= 100) {
      setQty(100);
    } else {
      setQty(qty - 1);
    }
  };

  const increaseQty = () => {
    if (qty >= 100) {
      setQty(qty + 1);
    } else {
      setQty(100);
    }
  };

  const onChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= 0) {
      setQty(value);
    }
  };

  if (qty >= tool.minimumOrderQuantity || qty <= tool.availableQuantity) {
    var para = <p className="mt-2">Total price: {qty * tool.price}</p>;
  }
  if (qty < tool.minimumOrderQuantity) {
    var error = (
      <p className="text-red-500 font-semibold">
        You have to purchase at least 100 products
      </p>
    );
  } else if (qty > tool.availableQuantity) {
    var error = (
      <p className="text-red-500 font-semibold">
        You have to purchase below our availableQuantity
      </p>
    );
  }

  return (
    <div className="px-12 mt-5 flex justify-center ">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="object-contain h-48 w-96" src={tool.img} alt="Album" />
        </figure>
     
        <div className="card-body">
        <form onSubmit={handleMyOrders}>
          <h2 className="card-title justify-center">{tool.name}</h2>
          <div>
            <p>Price: {tool.price}</p>
            <p>Availability: {tool.availableQuantity}</p>
            <div>
              <p className="font-bold">Order Quantity</p>
              <button className="text-4xl mr-2" onClick={decreaseQty}>
                {" "}
                -{" "}
              </button>
              <input
                type="text"
                name="quantity"
                className="input input-bordered input-primary "
                onChange={onChange}
                value={qty}
              />
              <button className="text-3xl ml-2" onClick={increaseQty}>
                {" "}
                +{" "}
              </button>
              {para}
            </div>
            {error}
            <h2 className="card-title justify-center mt-4">Your Information</h2>
            <p>Your Name: {user && user.displayName} </p>
            <p>Your Email: {user && user.email} </p>
            <input type="text" name="phone" placeholder="Your Phone Number" className="input input-bordered input-primary w-full max-w-xs mb-3 mt-3" />
            <textarea className="textarea textarea-primary" name="address" placeholder="Your Address"></textarea>
          </div>
          <div className="card-actions justify-center mt-5">
            <input value="Buy Now" type="submit"  disabled={qty < tool.minimumOrderQuantity || qty > tool.availableQuantity}  className="btn btn-primary"/>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
