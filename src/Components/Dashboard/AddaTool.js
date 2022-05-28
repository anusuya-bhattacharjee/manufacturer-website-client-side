import React from "react";


const handleAddTool = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const img = event.target.img.value;
    const price = event.target.price.value;
    const description = event.target.description.value;
    const availableQuantity = event.target.availability.value;
    const MinimumOrderQuantity = event.target.MinimumOrderQuantity.value;

    const tool = {name, img, price, description, availableQuantity, MinimumOrderQuantity};

    fetch("http://localhost:5000/addtools", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(tool),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log("success", data);
              alert("Tool added successfully!!");
              event.target.reset();
            });
}

const AddaTool = () => {
  return (
    <form onSubmit={handleAddTool}>
    <div class="card w-96 bg-base-100 shadow-xl">
   
    <div class="card-body">
        <h2 class="card-title justify-center">Add A Tool</h2>
        <input type="text" name="name" placeholder="Name" class="input input-bordered input-sm w-full max-w-xs" />
        <input type="text" name="img"  placeholder="Image Url" class="input input-bordered input-sm w-full max-w-xs" />
        <input type="text" name="price"  placeholder="Price" class="input input-bordered input-sm w-full max-w-xs" />
        <input type="text" name="description"  placeholder="Description" class="input input-bordered input-sm w-full max-w-xs" />
        <input type="text" name="availability"  placeholder="Availability" class="input input-bordered input-sm w-full max-w-xs" />
        <input type="text" name="MinimumOrderQuantity"  placeholder="Minimum Order Quantity" class="input input-bordered input-sm w-full max-w-xs" />
        <div class="card-actions justify-end">
          <input class="btn btn-primary" type="submit" value="Add"></input>
        </div>
      </div>
    </div>
    </form>
  );
};

export default AddaTool;
