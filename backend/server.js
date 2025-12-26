import express from "express";
import "dotenv/config";
import cors from "cors";
import connectdb from "./utils/db.js";

import cookieParer from "cookie-parser";

import userRouter from "./routes/userRoutes.js";
import reportRouter from "./routes/reportRoutes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParer());

app.use("/api", userRouter);
app.use("/api/report", reportRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
  connectdb();
});
