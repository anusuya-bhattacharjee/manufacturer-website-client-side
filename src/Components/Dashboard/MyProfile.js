import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";
import { getAuth } from "firebase/auth";

const auth = getAuth(app);

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [UserDetails, setUserDetails] = useState({});

  useEffect(() => {
    fetch(`https://manufacturer-website-rupsa23.onrender.com/userDetails/${user && user.email}`)
      .then((res) => res.json())
      .then((data) => setUserDetails(data));
  },[user]);

  const handleAddUser = (event) => {
    const name = event.target.name.value;
    const email_address = event.target.email_address.value;
    const LinkedIn_profile_link = event.target.LinkedIn_profile_link.value;
    const country = event.target.country.value;
    const street_address = event.target.street_address.value;
    const city = event.target.city.value;
    const state = event.target.state.value;
    const phone = event.target.phone.value;

    const User = {
      name,
      email_address,
      LinkedIn_profile_link,
      country,
      street_address,
      city,
      state,
      phone,
    };

    fetch("https://manufacturer-website-rupsa23.onrender.com/addUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(User),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Your Information added successfully!!");
      });
  };

  return (
    <div className="mt-10 sm:mt-0 mx-auto">
      <div className="md:grid">
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form onSubmit={handleAddUser}>
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                    <label
                      for="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={user && user.displayName}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-600 rounded-md uppercase"
                    />
                  </div>

                  <div className="col-span-6 ">
                    <label
                      for="email_address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <input
                      type="text"
                      name="email_address"
                      value={user && user.email}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-600 rounded-md"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      for="LinkedIn_profile_link"
                      className="block text-sm font-medium text-gray-700"
                    >
                      LinkedIn profile link
                    </label>
                    <input
                      type="text"
                      name="LinkedIn_profile_link"
                      defaultValue = {UserDetails.LinkedIn_profile_link}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-600 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 ">
                    <label
                      for="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Country
                    </label>
                    <select
                      name="country"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option selected>{UserDetails.country}</option>
                      <option>India</option>
                      <option>Bangladesh</option>
                    </select>
                  </div>

                  <div className="col-span-6">
                    <label
                      for="street_address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Street address
                    </label>
                    <input
                      type="text"
                      name="street_address"
                      defaultValue = {UserDetails.street_address}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-600 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label
                      for="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      defaultValue = {UserDetails.city}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-600 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      for="state"
                      className="block text-sm font-medium text-gray-700"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      defaultValue = {UserDetails.state}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-600 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      for="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      defaultValue = {UserDetails.phone}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-600 rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <input
                  type="submit"
                  value="Save"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
