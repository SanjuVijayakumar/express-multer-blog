import express from "express";
import { getPosts, createPost } from "../controllers/postController.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", upload.single("image"), createPost);

export default router;
