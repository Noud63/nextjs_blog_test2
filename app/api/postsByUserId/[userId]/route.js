import connectDB from "@/connectDB/database";
import Post from "@/models/post";
import { ObjectId } from "mongodb";

export const GET = async (request, { params }) => {
  try {
    await connectDB();
    console.log("Params:", params)   
    const { userId } = params;

    if (!userId) {
      return null;
    }

    const posts = await Post.aggregate([
      { $match: { user: ObjectId.createFromHexString(userId) } }, // Find posts by specific userId
      {
        $lookup: {
          from: "comments", // The collection to join
          localField: "_id", // Field from the posts collection
          foreignField: "postId", // Field from the comments collection
          as: "comments", // Output array field
        },
      },
      {
        $lookup: {
          from: "likes", // Collection name for likes
          localField: "_id", // Field in posts collection
          foreignField: "postId", // Field in likes collection
          as: "likes", // Output field for likes
        },
      },
      {
        $sort: { createdAt: -1 }, // Optional: Sort posts by creation date
      },
    ]);

        console.log("ById:", posts)

       return new Response(JSON.stringify({ posts }), { status: 200 });
   
  } catch (error) {
    console.log(error);
  }
};
