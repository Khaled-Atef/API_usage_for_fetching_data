import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styling.css";

const FetchingData = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <ul>
        {users.map((ele) => {
          return (
            <div class="ddd">
              <li key={ele.id}>
                <div>name: {ele.name} </div>
                <div> user name: {ele.username} </div>
                <div> email : {ele.email}</div>
                <div>city: {ele.address.city}</div>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default FetchingData;
