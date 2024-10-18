"use client";
import React, { useState, useRef, useEffect } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

const EditPostForm = ({ setShowEditForm, post }) => {

  const [content, setContent] = useState({
    postContent: post.postContent,
  });

  const textareaRef = useRef(null);

  const handleEditPost = async () => {
    //  try {
    //   const res = await fetch(`/api/editPost/${postId}`, {
    //     method: "PUT",
    //   });
    //   const data = await res.json();
    //   if (res.ok) {
    //     console.log(data.message);
    //   }
    // } catch (error) {
    //   console.log(data.message);
    // }
    //
    // router.refresh();
  };

  const closeModal = () => {
    setShowEditForm(false);
  };

  // Adjust the textarea height whenever the comment changes
  useEffect(() => {
    const textarea = textareaRef.current;

    if (textarea) {
      textarea.style.height = "auto"; // Reset the height
      textarea.style.height = `${textarea.scrollHeight}px`; // Set it to the scroll height
    }
  }, [content.postContent]); // Depend on comment to update on each change

  return (
    <div className="w-full h-full fixed top-0 left-0 right-0 bg-yellow-950/70 flex justify-center items-center z-[999]">
      <div className="w-full max-w-[500px] bg-white h-[550px] postmodal rounded-lg px-4">
         <div className="flex justify-between items-center py-4 border-b border-black">
           <span className="text-xl font-semibold">Bewerk:</span>
            <div
            className="flex items-center cursor-pointer"
            onClick={closeModal}
            >
            <IoMdCloseCircleOutline size={35} color={"#854d0e"} />
           </div>
         </div>

         <form className="w-full mt-4">
           <div className="w-full">
            <textarea
              ref={textareaRef}
              type="text"
              name="content"
              defaultValue={content.postContent}
              onChange={(e) => setContent(e.target.value)}
              className="w-full min-h-[50px] resize-none overflow-y-hidden bg-gray-100 rounded-xl py-2 pl-2 pr-10 outline-none placeholder-gray-500"
            ></textarea>
           </div>

           <div className="w-full flex justify-end mt-6">
             <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-900 via-yellow-700 to-yellow-900 rounded-lg text-white font-semibold py-4"
            >
              Update
             </button>
           </div>
         </form>
       </div>
    </div>
  );
};

export default EditPostForm;
