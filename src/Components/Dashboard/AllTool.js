import React from 'react';

const Tool = (props) => {
    const {img, name, price, MinimumOrderQuantity, availableQuantity, description, _id } = props.tool;

    return (
        <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>Price: {price}</p>
          <p>MinimumOrderQuantity: {MinimumOrderQuantity}</p>
          <p>Availability: {availableQuantity}</p>
          <p>{description}</p>
          <div className="flex">
          <div className="card-actions mt-2">
            <button className="btn btn-primary mr-2" onClick={()=> props.handleDeleteTools(_id)}>DELETE</button>
          </div>
          <div className="card-actions mt-2">
            <button className="btn btn-primary ml-2" onClick={()=> props.handleDeleteTools(_id)}>UPDATE</button>
          </div>
          </div>
         
        </div>
      </div>
    );
};

export default Tool;
