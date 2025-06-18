const express = require("express");
const router = express.Router();
const tools = require("../data/tools.json");

let favorites = [];

// POST /api/favorites
router.post("/", (req, res) => {
  const { toolId } = req.body;

  if (favorites.find((fav) => fav.id === toolId)) {
    return res.status(400).json({ message: "Tool already favorited" });
  }

  const tool = tools.find((t) => t.id === toolId);
  if (!tool) {
    return res.status(404).json({ message: "Tool not found" });
  }

  favorites.push(tool);
  res.status(201).json({ message: "Tool favorited", tool });
});

// GET /api/favorites
router.get("/", (req, res) => {
  res.json(favorites);
});

// DELETE /api/favorites/:id
router.delete("/:id", (req, res) => {
  const toolId = parseInt(req.params.id);

  const index = favorites.findIndex((tool) => tool.id === toolId);
  if (index === -1) {
    return res.status(404).json({ message: "Favorite not found" });
  }

  favorites.splice(index, 1);
  res.json({ message: "Removed from favorites" });
});


module.exports = router;
