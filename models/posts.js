import { Schema, model, models } from "mongoose";

const PostsSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
    },
    postContent: {
      type: String,
    },
    name: {
      type: String,
    },
    username: {
      type: String,
    },
    likes: [{ 
      type: Schema.Types.ObjectId, 
      ref: "users" }],
    images: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Posts = models.Posts || model("Posts", PostsSchema);

export default Posts;
