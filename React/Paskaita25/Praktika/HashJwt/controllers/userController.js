import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export async function registerUser(req, res) {
  const { username, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
    username,
    password: hashedPassword,
  });

  await newUser.save();

  res.json(newUser);
}

export async function loginUser(req, res) {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user) {
    return res.status(400).json({ err: "Incorrect Username or Password" });
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (isPasswordCorrect) {
    const secretKey = process.env.SECRET_KEY;

    const token = jwt.sign(
      { id: user._id, username: user.username },
      secretKey,
      { expiresIn: "1h" }
    );

    res.json({ token });
  } else {
    res.json({ message: "Incorrect Password" });
  }
}

export async function getUsers(req, res) {
  const users = await User.find();

  res.json(users);
}
