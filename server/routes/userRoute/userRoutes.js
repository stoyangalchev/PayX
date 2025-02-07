const express = require("express");
const userController = require("../../controllers/userController/userController");

const router = express.Router();

router.post("/users", userController.registerUser); // Register a new user
router.get("/users", userController.getAllUsers); // Get all users
router.get("/users/:id", userController.getUserById); // Get a single user
router.put("/users/:id", userController.updateUser); // Update user
router.delete("/users/:id", userController.deleteUser); // Delete user

module.exports = router;
