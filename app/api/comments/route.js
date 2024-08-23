import connectDB from "@/connectDB/database";
import Comments from "@/models/comments";
import { getSessionUser } from "@/utils/getSessionUser";


export const POST = async (request) => {
    try {
         await connectDB();

         const {username, post, recipient, comment} = await request.json()

         
         const sessionUser = await getSessionUser();

         if (!sessionUser || !sessionUser.user) {
           return new Response(
             JSON.stringify({
               message: "You must be logged in to post a comment!",
             }),
             { status: 401 }
           );
         }

         const { user } = sessionUser;
         
         const newPost = new Comments({
            sender: user.id,
            post,
            username,
            recipient,
            comment,
         })

         await newPost.save()

         return new Response(JSON.stringify(newPost), {status: 200})

    } catch (error) {
        
    }
}