const axios = require("axios");

class PostClient {
  constructor() {}

  async create(body) {
    return await axios({
      method: "post",
      url: "https://jsonplaceholder.typicode.com/posts",
      data: body
    });
  }

  async get(id) {
    return await axios({
      method: "get",
      url: `https://jsonplaceholder.typicode.com/posts/${id}`
    });
  }

  async update(id = 1) {
    return await axios({
      method: "put",
      url: `https://jsonplaceholder.typicode.com/posts/${id}`
    });
  }

  async delete(id = 1) {
    return await axios({
      method: "delete",
      url: `https://jsonplaceholder.typicode.com/posts/${id}`
    });
  }
}

module.exports = PostClient;
