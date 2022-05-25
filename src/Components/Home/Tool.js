import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({tool}) => {
  const navigate = useNavigate();

  const handlePurchase = id => {
    navigate(`/purchase/${id}`);
}
  
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={tool.img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{tool.name}</h2>
          <p>Price: {tool.price}</p>
          <p>MinimumOrderQuantity: {tool.minimumOrderQuantity}</p>
          <p>Availability: {tool.availableQuantity}</p>
          <p>{tool.description}</p>
          <div className="card-actions">
            <button className="btn btn-primary" onClick={()=>handlePurchase(tool._id)}>Purchase</button>
          </div>
        </div>
      </div>
    );
};

export default Tool;