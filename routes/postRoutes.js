import express from "express";
import { getPosts, createPost } from "../controllers/postController.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.get("/", getPosts);

// for single file upload
// router.post("/", upload.single("image"), createPost);

// For multiple files
router.post("/", upload.array("images", 5), createPost);

export default router;
