import express from "express";
import { protectRoute } from "../middlewares/authMiddleware.js";
import {
  deleteNotification,
  getNotifications,
} from "../controllers/notifcationControllers.js";

const router = express.Router();

router.get("/", protectRoute, getNotifications);
router.delete("/:notificationId", protectRoute, deleteNotification);

export default router;
