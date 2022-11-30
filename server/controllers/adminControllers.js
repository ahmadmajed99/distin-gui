import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newAdmin = new Admin({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });

    await newAdmin.save();
    res.status(200).send("Admin has been created");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const admin = await Admin.findOne({ username: req.body.username });
    if (!admin) return next(createError(404, "Admin Not Found"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      admin.password
    );
    if (!isPasswordCorrect)
      return next(createError(404, "Wrong password or username"));

    const token = jwt.sign(
      { id: admin._id, isAdmin: admin.isAdmin },
      process.env.JWT
    );
    const { password, isAdmin, ...otherDetails } = admin._doc;

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ ...otherDetails });
  } catch (err) {
    next(err);
  }
};
