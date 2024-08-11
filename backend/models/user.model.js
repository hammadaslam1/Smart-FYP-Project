import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      required: false,
      unique: true,
    },
    read:{
      broadcastsRead:{
        type: Boolean,
        default: false,
      },
      messagesRead:{
        type:Boolean,
        default: false,
      }
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
