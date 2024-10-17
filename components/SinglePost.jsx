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
  const [profilePic, setProfilePic] = useState("");

  useEffect(() => {
    if (session?.user.id === post.user._id) {
      setShowThreeDots(true);
      // setProfilePic(session?.user?.avatar);
    } 
    if (post?.user?.avatar) {
      setProfilePic(post.user.avatar);
    }
  }, [session, post.user._id, post.user.avatar]);
  

  return (
    <div className="singlepost bg-white h-auto rounded-lg mb-4 flex flex-col shadow-md relative mx-4">
      <Editordelete
        showOptions={showOptions}
        setShowOptions={setShowOptions}
        postId={post._id}
      />

      <div className="w-full flex justify-between items-center pb-2 border-b border-gray-400 p-4">
        <div className="flex flex-row">
          <Image
            src={profilePic ? profilePic : "/images/defaultAvatar.png"}
            alt="icon"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[45px] h-[45px] mt-2 rounded-full"
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
              className="rounded-full w-[40px] h-[40px] cursor-pointer transition-all hover:bg-yellow-800/40 p-2"
              onClick={() => setShowOptions(!showOptions)}
            />
          </div>
        )}
      </div>
      <div className="p-4">{post.postContent}</div>
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
