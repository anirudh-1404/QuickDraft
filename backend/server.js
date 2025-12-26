import express from "express";
import "dotenv/config";
import cors from "cors";
import connectdb from "./utils/db.js";

import userRouter from "./routes/userRoutes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
  connectdb();
});
