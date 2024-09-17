"use client"
import Image from 'next/image';
import PostCommentForm from './PostCommentForm';
import { useRouter } from 'next/navigation';

const PostComment = ({post, comments}) => {

console.log("Comments:", comments)
  
const sortedComments = comments.sort((a, b) =>
  b.createdAt.localeCompare(a.createdAt))

  const router = useRouter()

  const toggleLike = async (commentId) => {
    console.log(commentId)
    try {
      const res = await fetch(`/api/comments/${commentId}/like`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ commentId }),
      });

      if (!res.ok) {
        alert("Login first!");
      }
    } catch (error) {
      console.error("Error toggling like:", error);
    }
    router.refresh();
  }


 return (
   <div className="w-full flex flex-col items-center gap-2">
     <div className="w-full flex flex-col">
       <div className="pb-4 mb-2 text-lg font-semibold text-gray-600">
         Reacties:
       </div>
       {sortedComments.map((com, index) => (
         <div key={index} className="flex w-full h-auto gap-2">
           <div className="w-[45px] rounded-full">
             <Image
               src="/images/defaultAvatar.png"
               alt=""
               width={45}
               height={45}
               className="rounded-full w-[45px] h-auto"
             />
           </div>

           <div className="flex flex-col w-full mb-4">
             <div className="bg-gray-100 flex flex-1 flex-col mb-1 p-2 rounded-xl">
               <span className="text-sm text-gray-800 font-semibold">
                 {com.username}
               </span>
               <span>{com.comment}</span>
             </div>

             <div className="text-[12px] text-gray-500 font-normal flex justify-between pr-4">
               <span>
                 Gepost: {`${new Date(com.createdAt).toLocaleDateString()}`}
               </span>
               <span
                 className="text-gray-600 font-semibold text-[14px] cursor-pointer"
                 onClick={() => toggleLike(com._id)}
               >
                 Leuk {com.likesCount}
               </span>
             </div>
           </div>
         </div>
       ))}
     </div>

     <div className="flex w-full gap-2">
       <div className="w-[45px]">
         <Image
           src="/images/defaultAvatar.png"
           alt=""
           width={45}
           height={45}
           className="rounded-full w-[45px] h-[45px]"
         />
       </div>
       <PostCommentForm post={post} />
     </div>
   </div>
 );
}

export default PostComment
