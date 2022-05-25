import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";
import { getAuth } from "firebase/auth";

const auth = getAuth(app);

const Purchase = () => {
  const [user, loading] = useAuthState(auth);
  const { id } = useParams();
  const [tool, setTool] = useState({});
  const [qty, setQty] = useState();


  useEffect(() => {
    const url = `http://localhost:5000/tool/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, []);

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
      <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="object-contain h-48 w-96" src={tool.img} alt="Album" />
        </figure>
     
        <div class="card-body">
          <h2 class="card-title justify-center">{tool.name}</h2>
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
                class="input input-bordered input-primary "
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
            <h2 class="card-title justify-center mt-4">Your Information</h2>
            <p>Your Name: {user ? user.displayName : 'hi'} </p>
            <p>Your Email: {user ? user.email : 'hi'} </p>
            <input type="text" placeholder="Your Phone Number" class="input input-bordered input-primary w-full max-w-xs mb-3 mt-3" />
            <textarea class="textarea textarea-primary" placeholder="Your Address"></textarea>
          </div>

          <div class="card-actions justify-center mt-5">
            <button  disabled={qty < tool.minimumOrderQuantity || qty > tool.availableQuantity}  class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
