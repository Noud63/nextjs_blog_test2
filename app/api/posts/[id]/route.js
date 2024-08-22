import connectDB from "@/connectDB/database";
import Posts from "@/models/posts";
import Users from "@/models/Users";

export const GET = async (request, {params}) => {
  console.log(params)
  try {
    await connectDB();

    const {id} = params;
    const posts = await Posts.find({user:id});

    if (!posts) {
      return null;
    }

    console.log(posts)
              
    return new Response(JSON.stringify({posts}), { status: 200 });
    
  } catch (error) {
    console.log(error);
  }
};
    