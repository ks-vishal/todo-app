import express from "express";
import User from "../models/user.js";
import bcrypt from "bcryptjs";

const router = express.Router();

// Sign Up

router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const hashpassword = bcrypt.hashSync(password);
    const user = new User({ email, username, password: hashpassword });
    await user.save().then(() => {
      res.status(200).json({ message: "Sign Up Successfull." });
    });
    return;
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: "User Already Exists." });
  }
  return;
});

// Sign In

router.post("/signin", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      res.status(200).json({ message: "Please sign up" });
      return;
    }

    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect) {
      res.status(200).json({ message: "Password is incorrect." });
      return;
    }

    const { password, ...others } = user._doc;

    res.status(200).json({ others });
  } catch (error) {
    res.status(200).json({ message: "User Already Exists." });
  }
  return;
});

export default router;
