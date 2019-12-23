const Router = require("express");
const route = Router();
const UserService = require("../../services/user.service");
const container = require("typedi").Container;

module.exports = app => {
  app.use("/users", route);

  route.get("/me", (req, res) => {
    const userService = container.get(UserService);
    const user = userService.getUser();
    return res.json(user).status(200);
  });
};
