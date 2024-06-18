// pages/api/fetchData.js

import axios from "axios";

let cachedData = null;
let lastFetchedTime = 0;
const cacheDuration = 60 * 60 * 1000; // Cache data for 1 hour

export default async function handler(req, res) {
  try {
    const currentTime = Date.now();

    // If the data is not in the cache or it's older than the cache duration, fetch it
    if (!cachedData || currentTime - lastFetchedTime > cacheDuration) {
      const apiUrl = "https://d1krvzwx5oquy1.cloudfront.net/books.json";

      // Using Axios for fetching data
      const response = await axios.get(apiUrl);
      cachedData = response.data;
      lastFetchedTime = currentTime;
    }

    res.status(200).json(cachedData);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
