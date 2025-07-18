import express from "express";
import ENV from "./config/env.js";
import { connectDb } from "./config/db.js";

const app = express();

connectDb();

app.get("/", (req, res) => {
  res.send("hello /");
});

app.listen(ENV.PORT, () => {
  console.log(`listening on port ${ENV.PORT}`);
});
