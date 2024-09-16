import connectDB from "@/connectDB/database";
import Comment from "@/models/comment";
import { getSessionUser } from "@/utils/getSessionUser";

export const POST = async (request) => {
  try {
    await connectDB();

    const { userId, postId, comment, username } = await request.json();

    const sessionUser = await getSessionUser();
    
    const { user } = sessionUser

    if (!sessionUser || !sessionUser.user) {
      return new Response(
        JSON.stringify({
          message: "You must be logged in to post a comment!",
        }),
        { status: 401 }
      );
    }

    // const { user } = sessionUser;

    const newPost = new Comment({
      postId,
      userId,
      comment,
      username

    });

    await newPost.save()

     

    return new Response(JSON.stringify(newPost), { status: 200 });
  } catch (error) {}
};


