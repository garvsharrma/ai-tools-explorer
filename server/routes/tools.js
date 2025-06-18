const express = require("express");
const router = express.Router();
const tools = require("../data/tools.json");

// GET /api/tools?category=Writing
router.get("/", (req, res) => {
  const category = req.query.category;
  if (category) {
    const filtered = tools.filter(
      (tool) => tool.category.toLowerCase() === category.toLowerCase()
    );
    return res.json(filtered);
  }
  res.json(tools);
});

module.exports = router;
