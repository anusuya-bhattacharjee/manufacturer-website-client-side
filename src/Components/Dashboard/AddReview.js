import React from "react";

const AddReview = () => {

    const handleAddReview = (event) => {
        const addreview = event.target.review.value;
        const ratings = event.target.ratings.value;
        const Review = { review: addreview, ratings: ratings};  

        fetch("http://localhost:5000/addReview", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Review),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log("success", data);
              alert("Review added successfully!!");
              event.target.reset();
            });
    }
   
  return (
    <div>
      <div className="w-full max-w-xs">
        <form onSubmit={handleAddReview} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="review"
            >
             Add a Review
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="review"
              type="text"
              placeholder="Review"
            />
          </div>
          <div class="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="ratings"
            >
             Ratings 
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              name="ratings"
              type="text"
              placeholder="1 to 5"
            />
          </div>
          <div className="flex items-center justify-center">
            <input
              className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit" value="Add"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
