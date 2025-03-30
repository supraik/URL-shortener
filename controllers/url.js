const shortid = require("shortid");
const URL = require("../models/url");

async function handleGenerateNewShortURL(req, res) {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: "Url is required" });
  const shortURL = await shortid.generate();
  await URL.create({ shortId: shortURL, redirectURL: url, visitHistory: [] });
  return res.json({ id: shortURL });
}

async function handleGetRedirectURL(req, res) {
  const { paramid } = req.params;
  const shortURL = paramid;
  const entry = await URL.findOneAndUpdate(
    { shortId: shortURL },

    { $push: { visitHistory: { timestamp: Date.now() } } }
  );

  res.redirect(entry.redirectURL);
}

async function handleGetAnalytics(req, res) {
  try {
    const { paramid } = req.params; // Extract paramid from the route parameters
    const entry = await URL.findOne({ shortId: paramid }); // Fetch the entry from the database

    if (!entry) {
      return res.status(404).json({ error: "Short URL not found" });
    }

    return res.json({
      totalClicks: entry.visitHistory.length,
      analytics: entry.visitHistory,
    });
  } catch (error) {
    console.error("Error fetching analytics:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  handleGenerateNewShortURL,
  handleGetRedirectURL,
  handleGetAnalytics,
};
