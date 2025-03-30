const express = require("express");
const { handleGenerateNewShortURL } = require("../controllers/url");
const { handleGetRedirectURL } = require("../controllers/url");
const router = express.Router();

router.post("/", handleGenerateNewShortURL);
router.get("/:paramid", handleGetRedirectURL);
module.exports = router;
