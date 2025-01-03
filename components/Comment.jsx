"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";

const Comment = ({ com }) => {
  const { data: session } = useSession();

  const [likesCount, setLikesCount] = useState(com.likesCount);

  const router = useRouter();

  const toggleLike = async (commentId) => {

    try {
      const res = await fetch(`/api/comments/${commentId}/like`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ commentId }),
      });

      const data = await res.json()

      //Optimistic update
      if (data.message === "inc") {
        setLikesCount((prevCount) => prevCount + 1);
      } else {
        setLikesCount((prevCount) => prevCount - 1);
      }
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  const deleteComment = async (commentId) => {
    try {
      const res = await fetch(`/api/deleteComment/${commentId}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (res.ok) {
        console.log(data.message);
      }
    } catch (error) {
      console.log(data.message);
    }
    router.refresh();
  };

  return (
    <div className="flex h-auto w-full gap-2 px-4 max-xxsm:px-2">
      <div className="flex overflow-hidden rounded-full w-[45px] h-[45px] max-xxsm:w-[40px] max-xxsm:h-[40px]">
        <Image
          src={
            com.userId?.avatar
              ? com.userId.avatar
              : "/images/defaultAvatar2.png"
          }
          alt="icon"
          width={45}
          height={45}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mb-5 flex flex-1 w-full flex-col">
        <div className="mb-1 flex flex-1 flex-col rounded-xl bg-gray-100 p-2">
          <span className="text-sm font-semibold text-gray-800">
            {com.username}
          </span>
          <span>{com.comment}</span>
        </div>

        <div className="flex justify-between pr-2 text-[11px] font-normal text-gray-500">
          <span className="pt-[5px] pl-2">
            {`${new Date(com.createdAt).toLocaleDateString()}`}
          </span>
          <div className="flex flex-row gap-2">
            {com.userId._id === session?.user?.id && (
              <button
                type="button"
                className="cursor-pointer text-[12px] font-semibold text-gray-600"
                onClick={() => deleteComment(com._id)}
              >
                verwijder
              </button>
            )}
            <button
              type="button"
              className="flex w-[80px] cursor-pointer justify-center rounded-full border border-gray-500 text-[14px] font-semibold text-gray-600"
              onClick={() => toggleLike(com._id)}
              disabled={!session}
            >
              Leuk {likesCount}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
