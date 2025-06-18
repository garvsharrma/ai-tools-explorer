const express = require("express");
const cors = require("cors");

const toolsRoutes = require("./routes/tools");
const favoritesRoutes = require("./routes/favorites");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/tools", toolsRoutes);
app.use("/api/favorites", favoritesRoutes);

module.exports = app;
