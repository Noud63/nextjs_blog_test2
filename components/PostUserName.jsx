
import React from 'react'
import Link from 'next/link';

const PostUserName = ({post}) => {

  return (
    <div className="flex flex-col justify-start text-lg font-semibold text-green-900 ml-2">
      <Link href={`/postsByUserId/${post.user}`}>
        <div>
          {post.username}
        </div>
      </Link>
      <span className="text-sm font-normal text-gray-500">
        Gepost op: {`${new Date(post.createdAt).toLocaleDateString()}`}
      </span>
    </div>
  );
}

export default PostUserName
