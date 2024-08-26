
import { Schema, model, models } from "mongoose";

const LikesSchema = new Schema(
    {
post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Posts',
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
    },
  
  {
    timestamps: true,
  }
);

const Likes = models.Liokes || model("Likes", LikesSchema);

export default Likes