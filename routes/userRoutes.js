const express = require("express");
const { getAllUsers, ragisterController, loginController } = require("../controller/userController");
const router = express.Router();



// router Get all users
router.get("/all-users", getAllUsers);


router.post("/register", ragisterController);

// login post
router.post("/login", loginController)

module.exports = router;
