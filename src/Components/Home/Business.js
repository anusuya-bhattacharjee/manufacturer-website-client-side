import React from "react";
import {FaFontAwesomeFlag} from 'react-icons/fa';
import {FaUsers} from 'react-icons/fa';
import {HiOutlineThumbUp, HiDesktopComputer} from "react-icons/hi";

const Business = () => {
  return (
    <div className="mb-10 ">
      <h1 className="text-3xl font-bold uppercase text-teal-500">
        Millions Business Trust Us
      </h1>
      <h3 className="uppercase font-semibold text-2xl mt-4">
        Try to Understand Users Expectation
      </h3>
    <div className="flex mt-5">
    <div class="card w-96 bg-base-100 shadow-xl mr-2">
        <div class="card-body">
          <h2 className="flex justify-center text-7xl"><FaFontAwesomeFlag/></h2>
          <p className="text-5xl font-bold text-teal-500">72</p>
          <p className="text-2xl">Countries</p>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl mr-2">
  <div class="card-body">
  <h2 className="flex justify-center text-7xl"><HiDesktopComputer/></h2>
    <p className="text-5xl font-bold text-teal-500">535+</p>
          <p className="text-2xl">Complete Projects</p>
  </div>
</div>
<div class="card w-96 bg-base-100 shadow-xl mr-2">
  <div class="card-body">
  <h2 className="flex justify-center text-7xl"><FaUsers/></h2>
    <p className="text-5xl font-bold text-teal-500">273+</p>
          <p className="text-2xl">Happy Clients</p>
  </div>
</div>
<div class="card w-96 bg-base-100 shadow-xl mr-2">
  <div class="card-body">
  <h2 className="flex justify-center text-7xl"><HiOutlineThumbUp/></h2>
    <p className="text-5xl font-bold text-teal-500">432+</p>
          <p className="text-2xl">Feedbacks</p>
  </div>
</div>
    </div>
    </div>
  );
};

export default Business;
