const Router = require("express");
const route = Router();
const PostService = require("../services/post.service");
const container = require("typedi").Container;

module.exports = app => {
  app.use("/posts", route);

  route.post("/", async (req, res) => {
    const postService = container.get(PostService);
    const post = await postService.create(req.body);
    return res.json(post).status(200);
  });

  route.get("/:id", async (req, res) => {
    const postService = container.get(PostService);
    const post = await postService.get(req.params.id);
    return res.json(post).status(200);
  });

  route.delete("/:id", async (req, res) => {
    const postService = container.get(PostService);
    const post = await postService.delete(req.params.id);
    return res.json(post).status(200);
  });

  route.put("/:id", async (req, res) => {
    const postService = container.get(PostService);
    const post = await postService.update(req.params.id);
    return res.json(post).status(200);
  });
};
