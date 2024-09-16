"use client";
import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LikeButton = ({ postId , initialLikesCount }) => {

  const { data: session} = useSession()

  const router = useRouter()

  const toggleLike = async () => {
    try {

      const res = await fetch(`/api/posts/${postId}/like`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({postId})
      });

      if(!res.ok){
        alert("Login first!")
      }

    } catch (error) {
      console.error('Error toggling like:', error);
    }
    router.refresh()
  };

return (
  <div className="flex">
    <button type="button">
      <AiOutlineLike
        color="gray"
        size={30}
        disabled={!session?.user ? true : false}
        className="cursor-pointer"
        onClick={toggleLike}
      />
    </button>
    <div className="flex items-center justify-center w-[30px] rounded-full bg-red-700 text-white text-md font-semibold">
      {initialLikesCount}
    </div>
  </div>
);
};

export default LikeButton;
