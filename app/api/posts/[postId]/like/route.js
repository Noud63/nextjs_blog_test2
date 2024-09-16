import connectDB from "@/connectDB/database";
import Post from "@/models/post";
import Like from "@/models/like";
import { getSessionUser } from "@/utils/getSessionUser";

export const POST = async (request, { params }) => {
  await connectDB();

  const { postId } = params;
  const session = await getSessionUser()

  if (!session) {
    return new Response(JSON.stringify({message: "Unauthorized"}), { status: 401 });
  }

  const userId = session.user.id;

  try {

    const liked = await Like.findOne({ postId, userId });
       if(liked){
             const deletedLike = await Like.findOneAndDelete({ postId, userId });
       if(deletedLike){
           await Post.findByIdAndUpdate(postId, { $inc: { likesCount: -1 } });
       }
      }

     if(!liked){
            const like = await Like.create({ userId, postId });
            await Post.findByIdAndUpdate(postId, { $inc: { likesCount: 1 } });
     }
    return new Response(JSON.stringify(liked), { status: 201 });
  } catch (error) {
    return new Response({message:error.message}, { status: 500 });
  }
};
