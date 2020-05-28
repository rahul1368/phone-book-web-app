const router = require('express').Router()

const Users = require("../controllers/user.controller.js");

// Create a new User
router.post("/create-user", Users.create);

// Retrieve all Users

// Retrieve a single User with UserId
router.post("/get-user", Users.findOne);

// Update a User with UserId
router.put("/update-user/:userId", Users.update);

// Delete a User with UserId
router.delete("/delete-user/:userId", Users.delete);

// Create a new User
router.delete("/user", Users.deleteAll);

router.get("/all", Users.findAll);

module.exports = router

