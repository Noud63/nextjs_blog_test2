import React from 'react'
import Image from 'next/image';
import PostComment from './PostComment';
import LikeandShareBar from "./LikeandShareBar";
import PostUserName from './PostUserName';

const SinglePost = ({post, comments}) => {

  return (
   
      <div className="bg-white h-auto rounded-lg mb-4 flex flex-col p-4 shadow-md">
        <div className="w-full flex justify-start border-b border-gray-400 pb-2">
          <div className="">
            <Image
              src="/images/defaultAvatar.png"
              alt=""
              width={45}
              height={45}
              className="rounded-full w-[45px] h-[45px]"
            />
          </div>
          <PostUserName post={post} />
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
        <LikeandShareBar post={post}/>
        <PostComment comments={comments} post={post}/>
      </div>
  );
}

export default SinglePost
