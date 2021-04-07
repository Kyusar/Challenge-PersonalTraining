const express = require("express");
const router = express.Router();
const Posts = require("../models/Post");

// GET ALL POST
router.get("/", async (req, res) => {
  try {
    const posts = await Posts.find();
    res.json(posts);
  } catch (error) {
    res.json({ error });
  }
});

// GET SPECIFIC POST
router.get("/:postId", async (req, res) => {
  try {
    const post = await Posts.findById(req.params.postId);
    res.json(post);
  } catch (error) {
    res.json({ error });
  }
});

// DELETE A SPECIFIC POST
router.delete("/:postId", async (req, res) => {
  try {
    const remove = await Posts.remove({ _id: req.params.postId });
    res.json(remove);
  } catch (error) {
    res.json({ error });
  }
});

// UPDATE A POST
router.patch("/:postId", async (req, res) => {
  try {
    const updatePost = await Posts.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatePost);
  } catch (error) {
    res.json({ error });
  }
});

// SUBMIT A POST
router.post("/", async (req, res) => {
  const post = new Posts({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (error) {
    res.json({ error });
  }
  /* post
    .save()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    }); */
});

module.exports = router;
