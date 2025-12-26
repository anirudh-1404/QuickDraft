import jwt from "jsonwebtoken";
import { User } from "../models/userSchema.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log(token);
    const decode = await jwt.verify(token, process.env.SECRET_KEY);
    req.user = await User.findById(decode.id).select("-password");
    console.log(req.user);
    next();
  } catch (err) {
    return res.status(500).json({
      message: "Unauthorized!",
    });
  }
};
