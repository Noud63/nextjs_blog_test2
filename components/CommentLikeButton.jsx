"use client"
import React from 'react'
import { useRouter } from 'next/navigation';

const CommentLikeButton = ({com, initialLikesCount }) => {

  console.log(initialLikesCount)

      const router = useRouter();

     const toggleLike = async (commentId) => {

       console.log("Id:", commentId);

       try {
         const res = await fetch(`/api/posts/${commentId}/commentlike`, {
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
 
     };

  return (
    <button type="button"
      className="text-gray-600 font-semibold text-[14px] cursor-pointer flex gap-2"
      onClick={() => toggleLike(com._id)}
    >
      <div className="border border-gray-400 text-black w-[80px] h-[25px] rounded-full flex justify-center items-center">
        Leuk {initialLikesCount}
      </div>
    </button>
  );
}

export default CommentLikeButton
