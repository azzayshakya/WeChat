import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
    minLength: [6, "Email must be at least 6 characters long"],
    maxLength: [50, "Email must not be longer than 50 characters"],
  },
  password: {
    type: String,

    // If a matching document is found, MongoDB returns the full document
    // (except fields marked with select: false in the schema).

    // select:false
  },
});
const User = mongoose.model("user", userSchema);
export default User;
