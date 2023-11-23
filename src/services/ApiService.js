// ApiService.js
const BASE_URL = "https://your-backend-api-url.com";

const ApiService = {
  async fetchOrders() {
    try {
      const response = await fetch(`${BASE_URL}/orders`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Failed to fetch orders");
    }
  },

  async fetchTrackingDetails(trackingId) {
    try {
      const response = await fetch(`${BASE_URL}/tracking/${trackingId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Failed to fetch tracking details");
    }
  },

  async createOrder(orderData) {
    try {
      const response = await fetch(`${BASE_URL}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Failed to create order");
    }
  },

  async updateOrder(orderId, updatedData) {
    try {
      const response = await fetch(`${BASE_URL}/orders/${orderId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Failed to update order");
    }
  },
};

export default ApiService;
