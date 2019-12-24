const PostClient = require("../clients/post.client");
const UserClient = require("../clients/user.client");
const CommentClient = require("../clients/comment.client");

class PostService {
  constructor(container) {
    this.postClient = container.get(PostClient);
    this.userClient = container.get(UserClient);
    this.commentClient = container.get(CommentClient);
  }

  async create(postDto) {
    const { data: post } = await this.postClient.create(postDto);
    const [{ data: users }, { data: comments }] = await Promise.all([
      this.userClient.get(post.id),
      this.commentClient.get()
    ]);
    return {
      ...post,
      users,
      comments
    };
  }

  async get(id) {
    const { data: post } = await this.postClient.get(id);
    const [{ data: users }, { data: comments }] = await Promise.all([
      this.userClient.get(post.id),
      this.commentClient.get()
    ]);
    return {
      ...post,
      users,
      comments
    };
  }

  async update(id) {
    await this.postClient.update(id);
    const [{ data: users }, { data: comments }] = await Promise.all([
      this.userClient.get(id),
      this.commentClient.get()
    ]);
    return {
      id,
      users,
      comments
    };
  }

  async delete(id) {
    await this.postClient.delete(id);
    const [{ data: users }, { data: comments }] = await Promise.all([
      this.userClient.get(id),
      this.commentClient.get()
    ]);
    return {
      id,
      users,
      comments
    };
  }
}

module.exports = PostService;
