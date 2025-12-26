import express from "express";
import {
  loginController,
  registerUser,
} from "../controllers/userController.js";
import { protectRoute } from "../middleware/authMiddleware.js";

const route = express.Router();

route.post("/signup", registerUser);
route.post("/login", loginController);

export default route;
