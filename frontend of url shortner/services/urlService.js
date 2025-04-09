import axios from "axios";

const API_URL = "http://localhost:8001/url";

export const createShortUrl = async (url) => {
  try {
    console.log("Creating short URL for:", url);
    const response = await axios.post(`${API_URL}/shorten`, { url });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating short URL:", error);
    throw error;
  }
};

export const getAnalytics = async (shortUrl) => {
  try {
    const response = await axios.get(`${API_URL}/analytics/${shortUrl}`); // Use shortUrl directly
    return response.data;
  } catch (error) {
    console.error("Error fetching analytics:", error);
    throw error;
  }
};

//exporting both the functions
export default {
  createShortUrl,
  getAnalytics,
};
