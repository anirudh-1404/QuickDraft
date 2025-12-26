import { User } from "../models/userSchema.js";
import { comparePassword, hashedPassword } from "../utils/hashedPassword.js";

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

    const hashedPass = await hashedPassword(password);
    const user = await User.create({
      email,
      name,
      password: hashedPass,
      role,
    });

    return res.status(201).json({
      message: "User created successfully",
      data: { user: user, id: user._id, role: user.role },
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong while signup",
    });
  }
};

export const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json({
        message: "Email and Password required!",
      });
    }

    const isEmailExists = await User.findOne({ email });
    if (!isEmailExists) {
      return res.status(400).json({
        message: "User does not exists",
      });
    }

    const comparePass = await comparePassword(password, isEmailExists.password);
    if (comparePass) {
      return res.status(200).json({
        message: "User logged in!",
        data: { id: isEmailExists._id, name: isEmailExists.name },
      });
    } else {
      return res.status(400).json({
        message: "Inavlid credentials",
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong while logging in!",
    });
  }
};
