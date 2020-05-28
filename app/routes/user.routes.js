module.exports = app => {
  const Users = require("../controllers/User.controller.js");

  // Create a new User
  app.post("/user", Users.create);

  // Retrieve all Users
  app.get("/user", Users.findAll);

  // Retrieve a single User with UserId
  app.get("/user/:userId", Users.findOne);

  // Update a User with UserId
  app.put("/user/:userId", Users.update);

  // Delete a User with UserId
  app.delete("/user/:userId", Users.delete);

  // Create a new User
  app.delete("/user", Users.deleteAll);
};
