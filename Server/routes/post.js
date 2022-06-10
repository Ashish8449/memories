import express from "express";
import { createPost, deletePost, getPosts, updatePost } from "../controllers/post.js";

const router = express.Router();
router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
