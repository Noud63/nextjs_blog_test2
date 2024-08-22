import React from 'react'
import Image from 'next/image';
import PostComment from './PostComment';
import LikeandShare from "./LikeandShare";
import PostUserName from './PostUserName';
import { Skeleton } from "@nextui-org/skeleton";

const SinglePost = ({post}) => {

  return (
    <Skeleton className="w-full rounded-lg">
      <div className="bg-white rounded-lg mb-4 flex flex-col p-4">
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
        <LikeandShare />
        <PostComment />
      </div>
    </Skeleton>
  );
}

export default SinglePost
