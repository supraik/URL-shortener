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
module.exports = { handleGenerateNewShortURL, handleGetRedirectURL };
