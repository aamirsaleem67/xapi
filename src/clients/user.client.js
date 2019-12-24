const axios = require("axios");

class UserClient {
  constructor() {}

  async create(body) {
    return await axios({
      method: "post",
      url: "https://jsonplaceholder.typicode.com/users",
      data: body
    });
  }

  async get(postId) {
    return await axios({
      method: "get",
      url: `https://jsonplaceholder.typicode.com/users/?postId=${postId}`
    });
  }

  async update(id = 1) {
    return await axios({
      method: "get",
      url: `https://jsonplaceholder.typicode.com/users/${id}`
    });
  }

  async delete(id = 1) {
    return await axios({
      method: "get",
      url: `https://jsonplaceholder.typicode.com/users/${id}`
    });
  }
}

module.exports = UserClient;
