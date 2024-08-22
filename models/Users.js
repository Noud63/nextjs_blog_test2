import { Schema, model, models } from "mongoose";

const UsersSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    avatar: {
      type: String,
    },
    posts: [
      { 
        type: Schema.Types.ObjectId, 
        ref: "Posts" }
    ],
  },
  {
    timestamps: true,
  }
);

const Users = models.Users || model("Users", UsersSchema);

export default Users;