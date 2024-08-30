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
  console.log(userId)

  try {
    const like = await Like.create({ userId, postId });
    await Post.findByIdAndUpdate(postId, { $inc: { likesCount: 1 } });

    return new Response(JSON.stringify(like), { status: 201 });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
};
