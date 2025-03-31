import Radis from "ioredis";
import dotenv from "dotenv";
dotenv.config();

const radisClient = new Radis({
  host: process.env.RADIS_HOST,
  port: process.env.RADIS_PORT,
  password: process.env.RADIS_PASSWORD,
});

radisClient.on("connect", () => {
  console.log("Redis connected");
});
export default radisClient;
