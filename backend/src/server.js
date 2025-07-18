import express from "express";
import cors from "cors"
import {clerkMiddleware} from "@clerk/express"

import ENV from "./config/env.js";
import { connectDb } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js"
const app = express();

app.use(cors())
app.use(express.json())
app.use(clerkMiddleware());

connectDb();

app.get("/", (req, res) => {
  res.send("hello /");
});

app.use("/api/users", userRoutes)

app.listen(ENV.PORT, () => {
  console.log(`listening on port ${ENV.PORT}`);
});
