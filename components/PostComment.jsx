"use client"
import React from 'react'
import Image from 'next/image';
import { useSession } from 'next-auth/react';


const PostComment = () => {

  const { data: session} = useSession()

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  
  return (
    <div className="w-full flex items-center gap-2">
      <div className="w-[45px]">
        <Image
          src="/images/defaultAvatar.png"
          alt=""
          width={45}
          height={45}
          className="rounded-full w-[45px] h-[45px]"
        />
      </div>
      <form onSubmit={handleSubmit} className="flex flex-1">
        <input
          type="text"
          className="w-full bg-gray-100 rounded-full py-2 pl-4 outline-none placeholder-gray-500"
          placeholder="Schrijf een reactie"
        />
      </form>
    </div>
  );
}

export default PostComment
