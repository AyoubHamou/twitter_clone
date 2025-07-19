import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  getUserPosts,
  likeOrUnlikePost,
} from "../controllers/postControllers.js";
import { protectRoute } from "../middlewares/authMiddleware.js";
import upload from "../middlewares/uploadMiddleware.js";

const router = express.Router();

//public
router.get("/", getPosts);
router.get("/:postId", getPost);
router.get("/user/:username", getUserPosts);

//protected
router.post("/", protectRoute, upload.single("image"), createPost);
router.post("/:postId/like-unlike", protectRoute, likeOrUnlikePost);
router.delete("/:postId", protectRoute, deletePost);
export default router;
