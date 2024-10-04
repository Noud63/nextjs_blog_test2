import connectDB from "@/connectDB/database";
import cloudinary from "@/config/cloudinary";
import User from "@/models/User";
import Post from "@/models/post";
import Comment from "@/models/comment";
import Like from "@/models/like";
import { getSessionUser } from "@/utils/getSessionUser";


export const DELETE = async (request, { params }) => {
  try {
    await connectDB();

    const { postId } = params

    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.user?.id || !postId) {
      return new Response(JSON.stringify({message: "You are not authorized to delete a post!"}), { status: 401 });
    }

     await Post.findOneAndDelete({_id:postId})

     await Comment.find({ postId: postId });
    
     for(let comment of comments){
     await Like.deleteMany({ postId:comment._id });
     }

     await Like.deleteMany({ postId: postId });
     await Comment.deleteMany({ postId: postId });
      
     return new Response(JSON.stringify({message:"Post deleted successfully!"}), { status: 200 });
    
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong!", { status: 500 });
  }
};
