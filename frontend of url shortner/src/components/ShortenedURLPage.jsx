import React from "react";
import "../styles/ShortenedURLPage.css";
import { useNavigate, useLocation } from "react-router-dom";

const ShortenedURLPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract the shortened URL from the state passed via navigation
  const { shortUrl } = location.state || {};

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    alert("Shortened URL copied to clipboard!");
  };

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="shortened-url-page">
      <h2>Your Shortened URL</h2>
      <div className="input-container">
        <input type="text" value={shortUrl} readOnly />
        <button onClick={handleCopy}>Copy</button>
      </div>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default ShortenedURLPage;