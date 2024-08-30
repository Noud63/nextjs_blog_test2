import connectDB from "@/connectDB/database";
import Post from "@/models/post";

export const GET = async (request, {params}) => {

  try {
    await connectDB();

    const {id} = params;
    const posts = await Post.find({user:id})

    if (!posts) {
      return null;
    }
              
    return new Response(JSON.stringify({posts}), { status: 200 });
    
  } catch (error) {
    console.log(error);
  }
};
    