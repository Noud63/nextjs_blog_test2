"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import PostComment from "./PostComment";
import LikeandShareBar from "./LikeandShareBar";
import PostUserName from "./PostUserName";
import Editordelete from "./Editordelete";
import threedots from "../assets/icons/threedots.png";
import { useSession } from "next-auth/react";

const SinglePost = ({ post, comments }) => {

  const { data: session } = useSession();

  const [showThreeDots, setShowThreeDots] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    if (session?.user.id === post?.user._id) {
      setShowThreeDots(true);
      // setProfilePic(session?.user?.avatar);
    } 
    if (post?.user?.avatar) {
      setProfilePic(post.user.avatar);
    }
  }, [session, post?.user._id, post?.user.avatar]);
  

  return (
    <div className="singlepost relative mx-6 mb-4 flex h-auto flex-col rounded-lg bg-white shadow-md max-sm:mx-4 max-xsm:mx-2">
      <Editordelete
        showOptions={showOptions}
        setShowOptions={setShowOptions}
        postId={post._id}
        post={post}
      />

      <div className="flex w-full items-center justify-between border-b border-gray-400 p-4 pb-2 max-xxsm:pl-2">
        <div className="flex flex-1">
          <div className="flex h-[45px] w-[45px] flex-row max-xxsm:h-[40px] max-xxsm:w-[40px] overflow-hidden">
            <Image
              src={profilePic ? profilePic : "/images/defaultAvatar.png"}
              alt="icon"
              width={45}
              height={45}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <PostUserName post={post} />
        </div>

        {showThreeDots && (
          <div>
            <Image
              src={threedots}
              alt=""
              width={40}
              height={40}
              className="h-[40px] w-[40px] cursor-pointer rounded-full p-2 transition-all hover:bg-yellow-800/40"
              onClick={() => setShowOptions(!showOptions)}
            />
          </div>
        )}
      </div>
      <div className="p-4">{post.postContent}</div>
      <div className="w-full">
        {post?.images[0] && (
          <Image
            src={post?.images[0]}
            alt=""
            width={400}
            height={0}
            className="h-full w-full object-cover"
            priority
          />
        )}
      </div>
      <LikeandShareBar post={post} />
      <PostComment comments={comments} post={post} />
    </div>
  );
};

export default SinglePost;
