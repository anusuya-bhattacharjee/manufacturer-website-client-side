import React, { useEffect, useState } from "react";
import UserRow from "./UserRow";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://manufacturer-website-rupsa23.onrender.com/users", {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Emails</th>
              <th>Make Admin</th>
              <th>Remove User</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserRow key={user._id} user={user}></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
