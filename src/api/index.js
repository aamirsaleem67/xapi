const Router = require("express");
const user = require("../modules/user/user.controller");

// guaranteed to get dependencies
module.exports = () => {
  const app = Router();
  user(app);
  return app;
};
