import React from "react";
import LikeAndShareButtons from "./LikeAndShareButtons";

const LikeandShareBar = ({ post }) => {
  return (
    <div className="my-4 flex w-full flex-row border-b border-t border-gray-300 py-2">
      <LikeAndShareButtons post={post} />
    </div>
  );
};

export default LikeandShareBar;
