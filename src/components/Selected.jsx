import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function Selected({ users }) {
  const [searchString, setSearchString] = useState("");

  const [susers, setSusers] = useState([]);

  useEffect(() => {
    let tempUsers = users.filter((user) => {
      return user.status === "shortlisted";
    });

    setSusers(tempUsers);
    console.log("users:", users);
  }, []);

  return (
    <div className="main">
      {susers.length ? (
        <h2>Shortlisted Applications</h2>
      ) : (
        <h2>No Applicant Shortlisted Yet</h2>
      )}
      <div className="card-container">
        {susers.map((user) => {
          return <Card user={user} key={user.id} />;
        })}
      </div>
    </div>
  );
}
