import Radis from "ioredis";
import dotenv from "dotenv";
dotenv.config();

const redisClient = new Radis({
  host: process.env.RADIS_HOST,
  port: process.env.RADIS_PORT,
  password: process.env.RADIS_PASSWORD,
});

redisClient.on("connect", () => {
  console.log(
    "Redis HOST",
    process.env.RADIS_HOST,
    "Redis port",
    process.env.RADIS_PORT,
    "Redis password",
    process.env.RADIS_PASSWORD
  );
  console.log("Redis connected");
});
export default redisClient;
