import { Schema, model, models } from "mongoose";


const CommentsSchema = new Schema(
  {
    post: 
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    
    sender: 
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    
    recipient: 
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    
    name: {
        type: String,
        required: true
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

const Comments = models.Comments || model("Comments", CommentsSchema);

export default Comments;