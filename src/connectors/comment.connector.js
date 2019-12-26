const axios = require("axios");

const connector = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/comments",
  headers: { "Content-type": "application/json" }
});

module.exports = connector;
