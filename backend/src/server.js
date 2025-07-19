import express from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import ENV from "./config/env.js";
import { connectDb } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";
import { arcjetMiddleware } from "./middlewares/arcjetMiddleware.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());
app.use(arcjetMiddleware);
connectDb();

app.get("/", (req, res) => {
  res.send("hello /");
});

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/notifications", notificationRoutes);

app.listen(ENV.PORT, () => {
  console.log(`listening on port ${ENV.PORT}`);
});
