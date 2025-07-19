import express from "express";
import { protectRoute } from "../middlewares/authMiddleware";
import {
  deleteNotification,
  getNotifications,
} from "../controllers/notifcationControllers";

const router = express.Router();

router.get("/", protectRoute, getNotifications);
router.delete("/:notificationId", protectRoute, deleteNotification);

export default router;
