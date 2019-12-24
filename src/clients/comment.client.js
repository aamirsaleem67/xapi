const axios = require("axios");

class CommentClient {
  constructor() {}

  async create(body) {
    return await axios({
      method: "post",
      url: "https://jsonplaceholder.typicode.com/comments",
      data: body
    });
  }

  async get(postId = 1) {
    return await axios({
      method: "get",
      url: `https://jsonplaceholder.typicode.com/comments/?postId=${postId}`
    });
  }

  async update(id = 1) {
    return await axios({
      method: "get",
      url: `https://jsonplaceholder.typicode.com/comments/${id}`
    });
  }

  async delete(id = 1) {
    return await axios({
      method: "get",
      url: `https://jsonplaceholder.typicode.com/comments/${id}`
    });
  }
}

module.exports = CommentClient;
