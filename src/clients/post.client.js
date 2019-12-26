const axios = require("../connectors/post.connector");

class PostClient {
  constructor() {}

  async create(body) {
    return await axios({
      method: "post",
      url: "/",
      data: body
    });
  }

  async get(id) {
    return await axios({
      method: "get",
      url: `/${id}`
    });
  }

  async update(id = 1) {
    return await axios({
      method: "put",
      url: `/${id}`
    });
  }

  async delete(id = 1) {
    return await axios({
      method: "delete",
      url: `/${id}`
    });
  }
}

module.exports = PostClient;
