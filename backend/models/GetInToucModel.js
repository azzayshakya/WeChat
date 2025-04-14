import mongoose from "mongoose";

const GetInTouchSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    mobile: {
      type: String,
      required: true,
      length: 10,
    },
    location: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const GetInTouch = mongoose.model("GetInTouch", GetInTouchSchema);
export default GetInTouch;
