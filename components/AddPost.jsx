"use client";
import React, { useState } from "react";
import AddPostModal from "./AddPostModal";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const AddPost = () => {
  
  const [inView, setInView] = useState(false);

  const { data: session, status } = useSession();
  const profilePic = session?.user?.avatar

  const name = session?.user?.username;

  const router = useRouter()

  const showAddPostModal = () => {
    if (session?.user) {
      setInView(!inView);
    }
    if(!session?.user){
      router.push("/login")
    }
  };

return (
  <div className="mx-6 mt-4">
    <section className="singlepost w-full max-w-[620px] flex justify-between px-4 mx-auto bg-white py-4 rounded-lg">
      <div className="w-full flex flex-row gap-4 items-center">
        <Image
          src={profilePic ? profilePic : "/images/defaultAvatar2.png"}
          alt="icon"
          width={0}
          height={0}
          sizes="100vw"
          className="w-[45px] h-[45px] rounded-full"
        />
        <button
          className="w-full h-[40px] bg-gradient-to-r from-yellow-800 via-yellow-700 to-yellow-800 rounded-full pl-4 outline-none flex items-center text-white cursor-pointer"
          onClick={showAddPostModal}
        >
          {session?.user
            ? `Wat wil je met ons delen, ${name}?`
            : "wat wil je met ons delen?"}
        </button>
      </div>
    </section>
    <AddPostModal inView={inView} setInView={setInView} />
  </div>
);
};

export default AddPost;
