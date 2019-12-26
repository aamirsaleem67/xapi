const axios = require("../connectors/user.connector");

class UserClient {
  constructor() {}

  async create(body) {
    return await axios({
      method: "post",
      url: "/",
      data: body
    });
  }

  async get(postId) {
    return await axios({
      method: "get",
      url: `/?postId=${postId}`
    });
  }

  async update(id = 1) {
    return await axios({
      method: "get",
      url: `/${id}`
    });
  }

  async delete(id = 1) {
    return await axios({
      method: "get",
      url: `/${id}`
    });
  }
}

module.exports = UserClient;
