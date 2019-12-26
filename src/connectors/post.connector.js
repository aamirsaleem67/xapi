const axios = require("axios");

const connector = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
  headers: { "Content-type": "application/json" }
});

module.exports = connector;
