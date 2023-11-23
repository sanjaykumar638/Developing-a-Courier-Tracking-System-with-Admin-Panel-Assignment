// Sidebar.js
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom if using routing

function Sidebar() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/tracking">Tracking</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
