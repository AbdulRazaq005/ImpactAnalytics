import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function Applications({ users }) {
  const [searchString, setSearchString] = useState("");
  const [mapUsers, setMapUsers] = useState([]);

  useEffect(() => {
    setMapUsers(users);
  }, [users]);

  function handleChange(e) {
    console.log(e.target.value);
    setSearchString(e.target.value.toLowerCase());
  }

  useEffect(() => {
    if (searchString.length === 0) {
      setMapUsers(users);
    } else {
      let searchUsers = users.filter(function (u) {
        return u.name.toLowerCase().match(searchString);
      });
      console.log(searchUsers);
      setMapUsers(searchUsers);
    }
  }, [searchString]);

  return (
    <div className="main">
      <input
        className="search"
        type="text"
        onChange={handleChange}
        placeholder="Search by Name"
      />
      {searchString.length ? (
        <h2>Search Results :</h2>
      ) : (
        <h2>All Applications</h2>
      )}
      <div className="card-container">
        {mapUsers.map((user) => {
          return <Card user={user} key={user.id} />;
        })}
        {!mapUsers.length && (
          <h2>No Applications Found... Try different Name</h2>
        )}
      </div>
    </div>
  );
}
