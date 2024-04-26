import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";
import { JWT_SECRET } from "../../ENV.js";
export const verifyToken = (req, res, next) => {
  console.log(req.cookies);
  const token = req.cookies.access_token;
  if (!token) {
    console.log("sorry");
    return next(errorHandler(401, "token not found"));
  }
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return next(errorHandler(401, err));
    }
    req.user = user;
    next();
  });
};