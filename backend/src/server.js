import express from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";

import ENV from "./config/env.js";
import { connectDb } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

connectDb();

app.get("/", (req, res) => {
  res.send("hello /");
});

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);

app.listen(ENV.PORT, () => {
  console.log(`listening on port ${ENV.PORT}`);
});
