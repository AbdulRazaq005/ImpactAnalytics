import React, { useEffect, useState } from "react";
import axios from "axios";
import Applications from "./components/Applications";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Selected from "./components/Selected";
import Rejected from "./components/Rejected";
import Profile from "./components/Profile";
import "./app.css";

function App({ history }) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
      )
      .then((res) => {
        res.data.forEach((user) => {
          user.status = "None";
        });
        setUsers(res.data);
      });
  }, []);

  const updateStatus = (id, status) => {
    let tempUsers = users;
    tempUsers.forEach((user) => {
      if (user.id === id) user.status = status;
    });
    setUsers(tempUsers);
    console.log("users:", users);
    let tabs = document.querySelectorAll("nav a");
    tabs.forEach((ele) => {
      ele.className = "";
    });
    tabs[0].classList.value = "active-tab";
  };

  const activateTab = (e) => {
    document.querySelectorAll("nav a").forEach((ele) => {
      ele.className = "";
    });
    e.target.classList.value = "active-tab";
  };

  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <h1> Job Portal - Impact Analytics</h1>
          <nav>
            <Link to="/" className="active-tab" onClick={activateTab}>
              APPLICATIONS
            </Link>
            <Link to="/shortlisted" onClick={activateTab}>
              SHORTLISTED
            </Link>
            <Link to="/rejected" onClick={activateTab}>
              REJECTED
            </Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Applications users={users} />} />
          <Route
            exact
            path="/shortlisted"
            element={<Selected users={users} />}
          />
          <Route exact path="/rejected" element={<Rejected users={users} />} />
          <Route
            exact
            path="/:id"
            element={<Profile users={users} updateStatus={updateStatus} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
