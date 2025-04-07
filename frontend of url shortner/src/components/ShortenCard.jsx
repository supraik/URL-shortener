import React, { useState } from "react";
import { createShortUrl } from "../../services/urlService";
import "../styles/ShortenCard.css"; 


const ShortenCard = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [shortUrl, setShortUrl] = useState(""); 
  const [error, setError] = useState(""); // State for error handling

  const handleShorten = async () => {
    if (!inputUrl) {
      setError("Please enter a valid URL.");
      return;
    }
    setError("");
    try {
      const response = await createShortUrl(inputUrl); 
      setShortUrl(response.shortUrl);
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
      {error && <p className="error">{error}</p>} {/* Display error if any */}
      {shortUrl && (
        <div className="output-container">
          <p>Shortened URL:</p>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default ShortenCard;