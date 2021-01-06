const express = require("express");
const router = express.Router();

const user = require("../controllers/userController");

// ROUTES FOR USER. PREFIX /USERS

//MVP
router.post("/register", user.register);
router.post("/login", user.login);
router.get("/", user.getAll); // fetch all users data

//Extras
router.put("/update/:id", user.update);
router.get("/delete/:id", user.delete);
router.get("/:id", user.getOne);

module.exports = router;
