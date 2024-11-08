"use client";
import Image from "next/image";
import PostCommentForm from "./PostCommentForm";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const PostComment = ({ post, comments }) => {

  const sortedComments = comments.sort((a, b) =>
    b.createdAt.localeCompare(a.createdAt)
  );

  const { data: session } = useSession();
  const profilePic = session?.user?.avatar;
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

      console.log(res.status)

      if (!res.ok) {
        alert("Login first!");
      }
    } catch (error) {
      console.error("Error toggling like:", error);
    }
    router.refresh();
  };

  const deleteComment = async(commentId) => {
     try {
      const res = await fetch(`/api/deleteComment/${commentId}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (data) {
        console.log(data?.message);
      }
    } catch (error) {
      console.log(data?.message);
    }
    router.refresh();
  };

  return (
    <div className="flex w-full flex-col items-center gap-2">
      <div className="flex w-full flex-col">
        <div className="mb-2 pb-4 pl-4 text-lg font-semibold text-gray-600">
          Reacties:
        </div>
        {sortedComments.map((com, index) => (
          <div key={index} className="flex h-auto w-full gap-2 px-4">
            <div>
              <Image
                src={
                  com.userId?.avatar
                    ? com.userId.avatar
                    : "/images/defaultAvatar2.png"
                }
                alt="icon"
                width={45}
                height={45}
                className="h-auto w-[45px] rounded-full"
              />
            </div>

            <div className="mb-4 flex w-full flex-col">
              <div className="mb-1 flex flex-1 flex-col rounded-xl bg-gray-100 p-2">
                <span className="text-sm font-semibold text-gray-800">
                  {com.username}
                </span>
                <span>{com.comment}</span>
              </div>

              <div className="flex justify-between text-[12px] font-normal text-gray-500">
                <span className="text-[11px] mt-[4px]">
                  Gepost: {`${new Date(com.createdAt).toLocaleDateString()}`}
                </span>
                <div className="flex flex-row items-center gap-2">
                  {com.userId._id === session?.user?.id && (
                    <button
                      type="button"
                      className="flex cursor-pointer items-center font-semibold text-gray-600 pb-[1px]"
                      onClick={() => deleteComment(com._id)}
                    >
                      verwijder
                    </button>
                  )}
                  <button
                    type="button"
                    className="flex w-[80px] max-xsm:w-[70px] cursor-pointer justify-center rounded-full border border-gray-500 text-[14px] font-semibold text-gray-600"
                    onClick={() => toggleLike(com._id)}
                  >
                    Leuk {com.likesCount}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex h-auto w-full gap-2 px-4 pb-4">
        <Image
          src={profilePic ? profilePic : "/images/defaultAvatar2.png"}
          alt="avatar"
          width={43}
          height={43}
          className="h-[43px] w-[43px] rounded-full object-cover"
        />

        <PostCommentForm post={post} />
      </div>
    </div>
  );
};

export default PostComment;
