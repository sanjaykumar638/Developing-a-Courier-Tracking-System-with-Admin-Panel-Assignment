// Tracking.js

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ApiService from "../services/ApiService"; // Importing the ApiService to fetch tracking details

function Tracking() {
  const { trackingId } = useParams(); // Extracting trackingId from URL params
  const [trackingDetails, setTrackingDetails] = useState(null);

  useEffect(() => {
    // Fetch tracking details based on trackingId when the component mounts
    fetchTrackingDetails();
  }, [trackingId]);

  const fetchTrackingDetails = async () => {
    try {
      const details = await ApiService.fetchTrackingDetails(trackingId);
      setTrackingDetails(details);
    } catch (error) {
      console.error("Error fetching tracking details:", error);
    }
  };

  return (
    <div>
      <h2>Tracking Details</h2>
      {trackingDetails ? (
        <div>
          <p>Tracking ID: {trackingDetails.trackingId}</p>
          <p>Status: {trackingDetails.status}</p>
        </div>
      ) : (
        <p>Loading tracking details...</p>
      )}
    </div>
  );
}

export default Tracking;
