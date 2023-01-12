import React from 'react';
import { useNavigate } from 'react-router-dom';


const Searched = ({suggestion}) => {
    const navigate = useNavigate();

  const handlePurchase = id => {
    navigate(`/purchase/${id}`);
}
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={suggestion.img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{suggestion.name}</h2>
          <p>Price: {suggestion.price}</p>
          <p>MinimumOrderQuantity: {suggestion.MinimumOrderQuantity}</p>
          <p>Availability: {suggestion.availableQuantity}</p>
          <p>{suggestion.description}</p>
          <div className="card-actions">
            <button className="btn btn-primary" onClick={()=>handlePurchase(suggestion._id)}>Purchase</button>
          </div>
        </div>
      </div>
    );
};

export default Searched;