"use client";
import { useState, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { IoSendSharp } from "react-icons/io5";

const PostCommentForm = ({post}) => {

  const { data: session } = useSession();

  const id = session?.user?.id;
  const user = session?.user;


  const [comment, setComment] = useState("");
  const [sendButton, setSendButton] = useState(false);

  const textareaRef = useRef(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!session?.user) {
      router.push("/login");
    }

    const data = {
      userId: id,
      postId: post._id,
      comment: comment,
      username: user.username
    };

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (res.status === 401) {
        console.log("Log in first!");
      }

      if(res.status === 200){
        setComment("");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setComment("");
    }
    router.refresh();
  };

  useEffect(() => {
    if (comment !== "") {
      setSendButton(true);
    } else {
      setSendButton(false);
    }
  }, [comment]);

  
  // Function to handle input change and adjust the height
  const handleInputChange = (e) => {
    setComment(e.target.value);
   };


  // Adjust the textarea height whenever the comment changes
  useEffect(() => {
    const textarea = textareaRef.current;
    console.log(textarea.value)
    if (textarea) {
      textarea.style.height = "auto"; // Reset the height
      textarea.style.height = `${textarea.scrollHeight}px`; // Set it to the scroll height
    }
  }, [comment]); // Depend on comment to update on each change


  return (
    <form onSubmit={handleSubmit} className="flex flex-1 relative">
      <textarea
        ref={textareaRef}
        type="text"
        name="comment"
        className="w-full min-h-[50px] max-h-[500px] resize-none overflow-y-hidden bg-gray-100 rounded-xl py-2 pl-2 pr-10 outline-none placeholder-gray-500"
        placeholder="Schrijf een reactie"
        defaultValue={comment}
        onChange={handleInputChange}
      />
      <button type="submit" className="absolute right-2 bottom-2 cursor-pointer">
        {sendButton && <IoSendSharp color="green" size={25} />}
      </button>
    </form>
  );
};

export default PostCommentForm;
