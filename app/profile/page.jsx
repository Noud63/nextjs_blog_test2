"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getUserInfo } from "@/utils/postsRequest";


const ProfilePage = () => {

  const { data: session, update } = useSession();

  const user = session?.user
  const router = useRouter();

  const [avatar, setAvatar] = useState(null);
  // const [ userInfo, setUserInfo ] = useState({}) 

  

  // useEffect(() => {
  //   const getData = async (id) => {
  //     const data = await getUserInfo(id);
  //     setUserInfo(data);
      
  //     await update();
    
  //   };

  //   if(session?.user?.id){
  //      getData(session.user.id);
  //   }

    
  // }, [session?.user?.id]);

  
 const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target.files);
    formData.append("avatar", avatar);
    formData.append("userId", session?.user.id);


    try {
      const res = await fetch("/api/editprofile", {
        method: "POST",
        body: formData,
        headers: {
          enctype: "multipart/form-data",
        },
      });

       const result = await res.json()
      
       await update();

      if(res.status === 200){
        router.push("/")
       
      }
    } catch (err) {
      console.error(err);
    }
};


  return (
    <div className="singlepost w-full max-w-[680px] mx-auto p-4 bg-white rounded-lg text-black ">
      <div className="w-full border-b border-gray-400 mb-4 text-xl font-semibold py-2">
        Jouw Profiel:
      </div>

      {/* <div className="mb-2">
        <span className="font-semibold">Naam: </span>
        <span className="font-normal">{userInfo?.name}</span>
      </div>

      <div className="mb-2">
        <span className="font-semibold">Gebruikersnaam: </span>
        <span className="font-normal">{userInfo?.userName}</span>
      </div>

      <div className="mb-4 border-b border-gray-400 pb-4">
        <span className="font-semibold">Email: </span>
        <span className="font-normal">{userInfo?.email}</span>
      </div> */}

      <div className="mb-4 flex flex-row justify-between">
        <div className="flex flex-col">
          <span className="mb-2 font-semibold">Voeg profielfoto toe:</span>
          <form onSubmit={handleSubmit}>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setAvatar(e.target.files[0])}
            />
            <div className="w-full mt-4 bg-gradient-to-r from-green-950 via-green-800 to-green-950 rounded-lg p-1">
              <button
                type="submit"
                className="w-full py-2  rounded-lg text-white font-semibold "
              >
                Verstuur
              </button>
            </div>
          </form>
        </div>

        <div className="pr-4 flex items-center mb-16">
          <Image
            src={
              session?.user?.avatar
                ? session?.user?.avatar
                : "/images/defaultAvatar.png"
            }
            alt=""
            width={50}
            height={50}
            className="w-[50px] h-[50px] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
