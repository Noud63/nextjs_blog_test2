import { Schema, model, models } from "mongoose";

const CommentSchema = new Schema(
  {
    postId: {
      type: Schema.Types.ObjectId,
      ref: "Posts",
    },
    userId: {
      type:Schema.Types.ObjectId,
      ref: "User",
    },
    comment: {
      type: String,
      required: true,
    },
    username: {
      type: String
    }
  },
  {
    timestamps: true,
  }
);

const Comment = models.Comment || model("Comments", CommentSchema);

export default Comment;