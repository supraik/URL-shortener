import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShortenCard from "./components/ShortenCard";
import ShortenedURLPage from "./components/ShortenedURLPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShortenCard />} />
        <Route path="/shortened-url" element={<ShortenedURLPage />} />
      </Routes>
    </Router>
  );
};

export default App;