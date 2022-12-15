import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Client Home</Link>
        </li>
        <li>
          <Link to="/agent">Admin Dashboard</Link>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Dashboard;
