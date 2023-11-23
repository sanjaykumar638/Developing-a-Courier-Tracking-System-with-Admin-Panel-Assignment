// Dashboard.js
import React, { useEffect, useState } from "react";
import ApiService from "../services/ApiService"; // Importing the ApiService to fetch data

function Dashboard() {
  const [ordersCount, setOrdersCount] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  // Define additional state variables for other statistics if needed

  useEffect(() => {
    // Fetch data for the dashboard on component mount
    fetchDataForDashboard();
  }, []);

  const fetchDataForDashboard = async () => {
    try {
      // Example: Fetch orders count from the backend using ApiService
      const orders = await ApiService.fetchOrders();
      setOrdersCount(orders.length);

      // Example: Fetch total revenue from the backend using ApiService
      const revenue = await ApiService.fetchTotalRevenue();
      setTotalRevenue(revenue);

      // Fetch other statistics similarly and set the state
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <p>Number of Orders: {ordersCount}</p>
        <p>Total Revenue: ${totalRevenue}</p>
        {/* Display other statistics or graphs */}
      </div>
    </div>
  );
}

export default Dashboard;
