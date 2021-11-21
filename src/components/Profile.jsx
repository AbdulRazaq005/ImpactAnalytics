import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import "./profile.css";

export default function Profile({ users, updateStatus }) {
  const [user, setUser] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    users.forEach((user) => {
      if (user.id === id) setUser(user);
    });
  }, [users, id]);

  const handleClick = (e) => {
    updateStatus(user.id, e.target.value);
    setRedirect(true);
  };

  return (
    <div className="profile-container">
      {redirect && <Navigate to="/" />}
      {user ? (
        <>
          <img src={user.Image} alt="userImage" />
          <div className="profile-body">
            <h2>Name : {user.name}</h2>
            <h5>Id : {user.id}</h5>
            <h5>Status : {user.status}</h5>
            <button
              className="btn green"
              onClick={handleClick}
              value="shortlisted"
            >
              Shortlist
            </button>
            <button className="btn red" onClick={handleClick} value="rejected">
              Reject
            </button>
          </div>
        </>
      ) : (
        <>
          <img
            src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif"
            alt="userImage"
          />
        </>
      )}
    </div>
  );
}
