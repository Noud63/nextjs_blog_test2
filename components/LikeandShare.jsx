import React from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { TbShare3 } from "react-icons/tb";

const LikeandShare = () => {
  return (
    <div className="w-full flex flex-row border-b border-t border-gray-300 py-2 my-4">
      <div className="w-[45px]"></div>
      <div className="w-full flex flex-row justify-between pl-8 pr-6">
        <AiOutlineLike
          color="gray"
          size={30}
          className="cursor-pointer"
        />
        <FaWhatsapp color="gray" size={30} className="cursor-pointer"/>
        <TbShare3 color="gray" size={30} className="cursor-pointer"/>
      </div>
    </div>
  );
}

export default LikeandShare
