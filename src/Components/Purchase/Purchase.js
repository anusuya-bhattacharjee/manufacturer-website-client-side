import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
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

  if (qty>tool.minimumOrderQuantity || qty<=tool.availableQuantity) {
    var para = <p className="mt-2">Total price: {qty*tool.price}</p>
  }

  return (
    <div className="px-12 mt-5 flex justify-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={tool.img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{tool.name}</h2>
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
          <div class="card-actions">
            <button
              disabled={
                qty < tool.minimumOrderQuantity || qty > tool.availableQuantity
              }
              class="btn btn-primary"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
