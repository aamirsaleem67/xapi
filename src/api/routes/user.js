const Router = require('express');
const route = Router();

module.exports =  (app) => {
  app.use('/users', route);

  route.get('/me', (req, res) => {
    return res.json({ user: 'lols' }).status(200);
  });
};
