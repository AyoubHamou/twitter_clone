import express from "express";
import {
  createComment,
  deleteComment,
  getComments,
} from "../controllers/commentControllers.js";
import { protectRoute } from "../middlewares/authMiddleware.js";

const router = express.Router();

// public
router.get("/post/:postId", getComments);

// protected
router.post("/post/:postId", protectRoute, createComment);
router.delete("/:commentId", protectRoute, deleteComment);

export default router;
