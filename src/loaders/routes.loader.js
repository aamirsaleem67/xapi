const Router = require("express");
const CONTROLLERS = [
  require("../routes/post.route") //
];

// the purpose of this file is to register all the controllers and provide each controller dependency

function injectDependenciesToRoutes(app) {
  CONTROLLERS.forEach(controller => {
    controller(app);
  });
}

module.exports = () => {
  const app = Router();
  injectDependenciesToRoutes(app);
  return app;
};
