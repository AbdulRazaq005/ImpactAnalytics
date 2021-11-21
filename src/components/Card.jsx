import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

export default function Card({ user }) {
  return (
    <Link to={`/${user.id}`}>
      <div className="card">
        <img src={user.Image} alt="userImage" />
        <div className="card-body">
          <h2>{user.name}</h2>
          <h5>{user.id}</h5>
        </div>
      </div>
    </Link>
  );
}
