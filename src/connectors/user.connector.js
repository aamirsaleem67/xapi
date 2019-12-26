const axios = require("axios");

const connector = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users",
  headers: { "Content-type": "application/json" }
});

module.exports = connector;
