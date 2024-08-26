import { Schema, model, models } from "mongoose";

const CommentSchema = new Schema(
  {
    post: {
      type: Schema.Types.ObjectId,
      ref: "Posts",
    },
    user: {
      type:Schema.Types.ObjectId,
      ref: "User",
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Comment = models.Comment || model("Comment", CommentSchema);

export default Comment;