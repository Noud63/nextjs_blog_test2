"use client";
import React, { useState } from "react";
import AddPostModal from "./AddPostModal";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const AddPost = () => {
  
  const [inView, setInView] = useState(false);

  const { data: session, status } = useSession();
  console.log(session);

  const name = session?.user?.username;

  const router = useRouter()

  const showAddPostModal = () => {
    if (session?.user) {
      setInView(!inView);
      console.log("clicked");
    }
    if(!session?.user){
      router.push("/login")
    }
  };



  return (
    <div>
      <section className="w-full max-w-[680px] flex justify-between px-4 mx-auto bg-white py-4 rounded-lg shadow-md">
        <div className="w-full flex flex-row gap-4 items-center">
          <Image
            src={
              session?.user
                ? "https://shorturl.at/WrCNS"
                : "/images/defaultAvatar.png"
            }
            width={45}
            height={45}
            alt=""
            className="rounded-full w-[45px] h-[45px]"
          />
          <Link href={!session?.user ?  "/login" : "/postmodal"}
            className="w-full h-[40px] bg-slate-200 rounded-full pl-4 outline-none flex items-center text-gray-500 cursor-pointer"
           
          >
            {session?.user
              ? `Wat wil je met ons delen, ${name}?`
              : "wat wil je met ons delen?"}
          </Link>
        </div>
      </section>
      {/* <AddPostModal inView={inView} setInView={setInView} /> */}
    </div>
  );
};

export default AddPost;