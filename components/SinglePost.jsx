"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import PostComment from "./PostComment";
import LikeandShareBar from "./LikeandShareBar";
import PostUserName from "./PostUserName";
import edit from "../assets/icons/edit.png";
import deleteIcon from "../assets/icons/delete.png";
import threedots from "../assets/icons/threedots.png";
import { useSession } from "next-auth/react";

const SinglePost = ({ post, comments }) => {

  const { data: session } = useSession();

  const [showOptions, setShowOptions] = useState(false);
  const [showThreeDots, setShowThreeDots] = useState(false);
  const [profilePic, setProfilePic ] = useState("")

  const editPost = () => {
    setShowOptions(false);
  };

  const deletePost = () => {
    setShowOptions(false);
  };

  useEffect(() => {
    if (session?.user.id === post.user._id) {
      console.log(session?.user.username);
      setShowThreeDots(true);
    }

    if (post?.user?.avatar) {
      setProfilePic(post.user.avatar);
    }
  }, [session, post.user._id, post.user.avatar]);

  console.log("Post:", post)

  return (
    <div className="singlepost bg-white h-auto rounded-lg mb-4 flex flex-col p-4 shadow-md relative">
      {showOptions && (
        <div className="postMenu absolute top-12 right-14 flex flex-col h-auto w-[240px] bg-white rounded-lg p-4 text-lg font-semibold">
          <div
            className="w-full border-b border-gray-400 pb-2 mb-2 flex flex-row cursor-pointer"
            onClick={editPost}
          >
            <Image
              src={edit}
              alt=""
              width={32}
              height={32}
              className="w-[32px] h-[32px] cursor-pointer p-2"
            />
            <span>Bewerk</span>
          </div>
          <div
            className="w-full flex flex-row cursor-pointer"
            onClick={deletePost}
          >
            <Image
              src={deleteIcon}
              alt=""
              width={32}
              height={32}
              className="w-[32px] h-[32px] cursor-pointer p-2"
            />
            <span>Verwijder</span>
          </div>
        </div>
      )}

      <div className="w-full flex justify-between items-center pb-2 border-b border-gray-400">
        <div className="flex flex-row">
          <Image
            src={profilePic ? profilePic : "/images/defaultAvatar.png"}
            alt=""
            width={45}
            height={45}
            className="rounded-full w-[45px] h-[45px]"
          />
          <PostUserName post={post} />
        </div>

        {showThreeDots && (
          <div>
            <Image
              src={threedots}
              alt=""
              width={40}
              height={40}
              className="rounded-full w-[40px] h-[40px] cursor-pointer transition-all hover:bg-green-800/20 p-2"
              onClick={() => setShowOptions(!showOptions)}
            />
          </div>
        )}
      </div>
      <div className="py-4">{post.postContent}</div>
      <div className="w-full">
        {post.images.length > 0 ? (
          <Image
            src={post.images[0]}
            alt=""
            width={400}
            height={0}
            className="w-full h-full object-cover"
            priority
          />
        ) : (
          ""
        )}
      </div>
      <LikeandShareBar post={post} />
      <PostComment comments={comments} post={post} />
    </div>
  );
};

export default SinglePost;
