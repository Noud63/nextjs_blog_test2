"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { IoSendSharp } from "react-icons/io5";

const PostCommentForm = ({post}) => {

  const { data: session } = useSession();

  const id = session?.user?.id;
  const user = session?.user;

  const [comment, setComment] = useState("");
  const [sendButton, setSendButton] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!session?.user) {
      router.push("/login");
    }

    const data = {
      recipient: post.user,
      post: post._id,
      comment: comment,
      username: user?.username,
    };

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify(data),
      });
      
      console.log("Data:", await res.json())
      if (res.status === 401) {
        console.log("Log in first!");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setComment("");
    }
  };

  useEffect(() => {
    if (comment !== "") {
      setSendButton(true);
    } else {
      setSendButton(false);
    }
  }, [comment]);

  return (
    <form onSubmit={handleSubmit} className="flex flex-1 relative">
      <input
        type="text"
        name="comment"
        className="w-full bg-gray-100 rounded-full py-2 pl-4 outline-none placeholder-gray-500 flex flex-wrap"
        placeholder="Schrijf een reactie"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit" className="absolute right-2 top-2 cursor-pointer">
        {sendButton && <IoSendSharp color="green" size={25} />}
      </button>
    </form>
  );
};

export default PostCommentForm;
