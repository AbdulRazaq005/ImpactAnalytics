import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function Rejected({ users }) {
  const [searchString, setSearchString] = useState("");
  const [rusers, setRusers] = useState([]);

  useEffect(() => {
    let tempUsers = users.filter((user) => {
      return user.status === "rejected";
    });

    setRusers(tempUsers);
    console.log("users:", users);
  }, []);

  return (
    <div className="main">
      {rusers.length ? (
        <h2>Rejected Applications</h2>
      ) : (
        <h2>No Applicant Rejected Yet</h2>
      )}
      <div className="card-container">
        {rusers.map((user) => {
          return <Card user={user} key={user.id} />;
        })}
      </div>
    </div>
  );
}
