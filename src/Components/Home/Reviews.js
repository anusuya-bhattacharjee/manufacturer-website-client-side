import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
            fetch('https://manufacturer-website-rupsa23.onrender.com/allReviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    },
     [])
    return (
        <div>
        <h2 className="justify-center font-bold text-3xl text-teal-500">Reviews</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-3 mb-20 mt-8">
            {
                reviews.map(review =>
                 <Review key={review._id} 
                 review={review}></Review>)
            }
        </div>
        </div>
       
    );
};

export default Reviews;