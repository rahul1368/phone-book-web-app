module.exports = app => {
  const Users = require("../controllers/User.controller.js");

  // Create a new User
  app.post("/Users", Users.create);

  // Retrieve all Users
  app.get("/user", Users.findAll);

  // Retrieve a single User with UserId
  app.get("/Users/:UserId", Users.findOne);

  // Update a User with UserId
  app.put("/Users/:UserId", Users.update);

  // Delete a User with UserId
  app.delete("/Users/:UserId", Users.delete);

  // Create a new User
  app.delete("/Users", Users.deleteAll);
};
