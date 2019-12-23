const Router = require("express");
const CONTROLLERS = [
  require("../modules/user/user.controller") //
];

// the purpose of this file is to register all the controllers and provide each controller dependency

function injectDependenciesToControllers(app) {
  CONTROLLERS.forEach(controller => {
    controller(app);
  });
}

module.exports = () => {
  const app = Router();
  injectDependenciesToControllers(app);
  return app;
};
