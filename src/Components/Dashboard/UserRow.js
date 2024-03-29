import React from "react";

const UserRow = ({user}) => {
    const {email, role} = user;
    const makeAdmin = () => {
        fetch(`https://manufacturer-website-rupsa23.onrender.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 403){
                alert("Failed to make an admin");
            }
           return res.json()})
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0) {
                alert("Successfully made an admin");
            }
           
        })
    }
  return (
    <tr>
      <th>1</th>
      <td>{email}</td>
      <td> {role !== 'admin' && <button class="btn btn-xs" onClick={makeAdmin}>Make Admin</button> }</td>
      <td><button class="btn btn-xs">Remove User</button></td>
    </tr>
  );
};

export default UserRow;
