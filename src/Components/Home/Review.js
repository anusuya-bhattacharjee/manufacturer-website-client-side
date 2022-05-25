import React from "react";

const Review = (props) => {
  const { review, ratings } = props.review;
  return (
    <div className="card w-96 bg-slate-500 text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{review}</h2>
        <p>Ratings: {ratings}</p>
      </div>
    </div>
  );
};

export default Review;
