const express = require("express");
const router = express.Router();
const validateUser = require("../middlewares/inputValidator");
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
router.get("/user", getAllUsers);
router.post("/user", createUser);
router.get("/user/:id", getUserById);
router.put("/user/:id", validateUser, updateUser);
router.delete("/user/:id", deleteUser);

module.exports = router;
