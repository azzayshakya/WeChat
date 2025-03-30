import express from "express";
import morgan from "morgan";
import connectDB from "./db/db.js";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();
connectDB();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoutes);
app.get("/", (req, res) => {
  res.send(` WeChat backend is running`);
});

export default app;
