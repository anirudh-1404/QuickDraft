import { User } from "../models/userSchema";

export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password) {
      return res.status(404).json({
        message: "All feilds are required!",
      });
    }

    const isUser = await User.findOne({ email });

    if (isUser) {
      return res.status(400).json({
        message: "Email already exists!",
      });
    }

    const user = await User.create({
      email,
      name,
      password,
      role,
    });

    return res.status(201).json({
      message: "User created successfully",
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
};
