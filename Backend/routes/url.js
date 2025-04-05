const express = require("express");
const { handleGenerateNewShortURL } = require("../controllers/url");
const { handleGetRedirectURL } = require("../controllers/url");
const { handleGetAnalytics } = require("../controllers/url");
const router = express.Router();

router.get("/analytics/:paramid", handleGetAnalytics);
router.post("/", handleGenerateNewShortURL);
router.get("/:paramid", handleGetRedirectURL);

module.exports = router;
