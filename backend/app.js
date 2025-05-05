import express from "express";
import morgan from "morgan";
import connectDB from "./db/db.js";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import projectRoutes from "./routes/project.routes.js";
import portfolioRoutes from "./routes/portfolioRoutes.js";
import aiRoutes from "./routes/ai.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();
const app = express();
connectDB();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "https://wechat-teal.vercel.app",
      "http://localhost:5000",
      "https://ajaykumarshakya.vercel.app",
      "https://nxt-wave-liart.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use("/auth", authRoutes);
app.use("/project", projectRoutes);
app.use("/portfolio", portfolioRoutes);
app.use("/ai", aiRoutes);

app.get("/", (req, res) => {
  res.send(` WeChat backend is running`);
});

export default app;
