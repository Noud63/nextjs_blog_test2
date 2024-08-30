"use client";
import React,{useState} from "react";
import { AiOutlineLike } from "react-icons/ai";
import { useSession } from "next-auth/react";

const LikeButton = ({ postId , initialLikesCount }) => {

  const { data: session} = useSession()

  const [liked, setLiked] = useState(false);
  let [likesCount, setLikesCount] = useState(initialLikesCount);

  const toggleLike = async () => {
    try {

      const res = await fetch(`/api/posts/${postId}/${liked ? "unlike" : "like"}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({postId})
      });

      if(!res.ok){
        alert("Login first!")
      }

      if (res.ok) {
        setLiked(!liked);
        setLikesCount(prevCount => prevCount + (liked ? -1 : 1));
      } else {
        console.error('Failed to toggle like');
      }
    } catch (error) {
      console.error('Error toggling like:', error);
    }
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
      {likesCount}
    </div>
  </div>
);
};

export default LikeButton;
