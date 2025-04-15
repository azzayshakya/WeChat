// models/Message.js

import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    sender: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
    isAI: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const ChatMessageModel= mongoose.model("Message", messageSchema);
export default ChatMessageModel;
