import jwt from "jsonwebtoken";
import redisClient from "../services/redis.service.js";

const authMiddleware = async (req, res, next) => {
  try {
    const token =
      req.cookies?.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No token provided" });
    }

    const isBlacklisted = await redisClient.get(token);
    if (isBlacklisted) {
      return res
        .status(401)
        .json({ message: "Unauthorized: Token is blacklisted" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauhorized: Invalid token" });
  }
};

export default authMiddleware;
