import React from 'react'
import LikeAndShareButtons from './LikeAndShareButtons';

const LikeandShare = () => {
  return (
    <div className="w-full flex flex-row border-b border-t border-gray-300 py-2 my-4">
      <div className="w-[45px]"></div>
     <LikeAndShareButtons />
    </div>
  );
}

export default LikeandShare
