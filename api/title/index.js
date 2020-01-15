const consola = require('consola');
const express = require('express');
const app = express();
const titleRouter = express.Router();

titleRouter.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request);
  Object.setPrototypeOf(res, app.response);
  req.res = res;
  res.req = req;
  next();
});

titleRouter.get('/title', (req, res) => {
  res
    .json()
    .then((data) => {
      consola.ready({
        message: `~api/title get title is ${data}`,
        badge: true,
      });
    })
    .catch((error) => {
      consola.error({
        message: `~api/title get Something went wrong: ${error}`,
        badge: true,
      });
      throw new Error(error);
    });
});

titleRouter.post('/title', (req, res) => {
  res
    .json()
    .then((data) => {
      consola.ready({
        message: `~api/title post title is ${data}`,
        badge: true,
      });
    })
    .catch((error) => {
      consola.error({
        message: `~api/title post Something went wrong: ${error}`,
        badge: true,
      });
      throw new Error(error);
    });
});

module.exports = titleRouter;
