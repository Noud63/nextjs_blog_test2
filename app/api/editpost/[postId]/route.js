import connectDB from "@/connectDB/database";
import cloudinary from "@/config/cloudinary";
import Post from "@/models/post";
import { getSessionUser } from "@/utils/getSessionUser";

export const PUT = async (request, { params }) => {
  try {
    await connectDB();

    const body = await request.json();
    const { postId } = params;

     console.log(JSON.stringify(body.images))

    const data = {
      postContent: body?.postContent,
      images: body?.images,
    };

    console.log(JSON.stringify(data, null, 2));

    const updatedPost = await Post.findOneAndUpdate(
      { _id: postId },
      { $set: { postContent: data.postContent, images: [...data.images] } }
    );

    return new Response(
      JSON.stringify({ message: "Post updated successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: "Update failed!" }), { status: 200 });
  }
};
