const express = require("express");
const cors = require("cors");
require("dotenv").config();
const pool = require("./config/db");
const app = express();
const port = process.env.PORT || 4000;
const router = require("./routes/userRoutes");
const errorHanlding = require("./middlewares/errrorHandler");
const createUserTable = require("./data/createUserTable");
// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON requests
console.log("PORT from .env:", process.env.DB_PORT);
console.log("PORT from .env:", process.env.DB_DATABASE);

// Routes
createUserTable();
app.use("/api", router);
//Testing
app.get("/", async (req, res) => {
  const result = await pool.query("SELECT current_database()");
  res.send(`The database name is : ${result.rows[0].current_database}`);
});
app.use(errorHanlding);
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
