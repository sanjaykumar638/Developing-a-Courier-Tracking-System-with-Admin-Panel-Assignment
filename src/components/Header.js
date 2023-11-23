// Header.js
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom if using routing

function Header() {
  return (
    <header>
      <div className="logo">
        <h1>Courier Tracking</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/tracking">Tracking</Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
      <div className="user-profile">
        {/* Add user profile information or login/logout functionality */}
        <span>Welcome, Username</span>
        {/* Add logout button or user profile icon */}
      </div>
    </header>
  );
}

export default Header;
