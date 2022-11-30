import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "you are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT, (err, admin) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.admin = admin;
    next();
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.admin.isAdmin) {
      next();
    } else {
      return next(createError(403, "you are not authorized"));
    }
  });
};
