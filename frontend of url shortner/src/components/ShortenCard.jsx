import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createShortUrl } from "../../services/urlService";
import "../styles/ShortenCard.css";

const ShortenCard = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleShorten = async () => {
    if (!inputUrl) {
      setError("Please enter a valid URL.");
      return;
    }
    setError("");
    try {
      const response = await createShortUrl(inputUrl);
      console.log("Response from backend:", response);

      // Navigate to the ShortenedURLPage with the shortened URL
      navigate("/shortened-url", { state: { shortUrl: response.id } });
    } catch (err) {
      console.error("Error shortening URL:", err);
      setError("Failed to shorten the URL. Please try again.");
    }
  };

  return (
    <div className="shorten-card">
      <h2>URL Shortener</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your URL here"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
        />
        <button onClick={handleShorten}>Shorten</button>
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default ShortenCard;