import express from "express";
import {
  followUser,
  getCurrentUser,
  getUserProfile,
  syncUser,
  updateProfile,
} from "../controllers/userControllers.js";
import { protectRoute } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/profile/:username", getUserProfile);

router.post("/syncUser", protectRoute, syncUser);
router.get("/me", protectRoute, getCurrentUser);
router.put("/profile", protectRoute, updateProfile);
router.post("/follow/:targetUserId", protectRoute, followUser);

export default router;
