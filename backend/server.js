import express from "express";
import "dotenv/config";
import connectdb from "./utils/db.js";

const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
  connectdb();
});
