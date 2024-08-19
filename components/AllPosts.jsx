
import React from 'react'
import Image from 'next/image';

const AllPosts = ({post}) => {

  return (
    <div className="bg-white  rounded-lg mb-4 flex flex-col p-4">
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
        <div className="flex flex-col justify-start text-lg font-semibold text-green-900 ml-2">
          <span>{post.username}</span>
          <span className="text-sm font-normal text-gray-500">
            Gepost op: {`${new Date(post.createdAt).toLocaleDateString()}`}
          </span>
        </div>
      </div>
      <div className="p-2">{post.postContent}</div>
      <div className="w-full ">
        {post.images.length > 0 ? (
          <Image src={post.images[0]} alt="" width={500} height={500} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default AllPosts
