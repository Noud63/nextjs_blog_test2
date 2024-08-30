import React from 'react'
import LikeButton from './LikeButton';
import { FaWhatsapp } from "react-icons/fa";
import { TbShare3 } from "react-icons/tb";


const LikeAndShareButtons = ({post}) => {

  return (
    <div className="w-full flex flex-row justify-between pl-4 pr-6">
     
        
        <LikeButton postId={post._id} initialLikesCount={post.likesCount}/>
        
      <FaWhatsapp color="gray" size={30} className="cursor-pointer" />
      <TbShare3 color="gray" size={30} className="cursor-pointer" />

    </div>
  );
}

export default LikeAndShareButtons
