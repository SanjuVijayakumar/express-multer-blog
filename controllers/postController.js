import Post from "../models/Post.js";

// Get all posts
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create post with image
export const createPost = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const image = req.file ? req.file.filename : null;

    const newPost = new Post({ title, content, author, image });
    await newPost.save();

    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
