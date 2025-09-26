const express = require("express");
const cors = require("cors");
require("dotenv").config();
const pool = require("./config/db");
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON requests
console.log("PORT from .env:", process.env.DB_PORT);
console.log("PORT from .env:", process.env.DB_DATABASE);

// Routes

//Testing
app.get("/", async (req, res) => {
  const result = await pool.query("SELECT current_database()");
  res.send(`The database name is : ${result.rows[0].current_database}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
