"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";


const ProfilePage = () => {
  const { data: session } = useSession();

  console.log("User:", session?.user)

  const name = session?.user?.name;
  const username = session?.user?.username;
  const email = session?.user?.email;
  const profilePic = session?.user?.avatar;

  const [avatar, setAvatar] = useState(null);

  const router = useRouter()


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
       console.log("Res:", result)
    
      // if(res.status === 200){
      //   router.push("/")
      // }
    } catch (err) {
      console.error(err);
    }
    
};


  return (
    <div className="singlepost w-full max-w-[680px] mx-auto p-4 bg-white rounded-lg text-black ">
      <div className="w-full border-b border-gray-400 mb-4 text-xl font-semibold py-2">
        Jouw Profiel:
      </div>

      <div className="mb-2">
        <span className="font-semibold">Naam: </span>
        <span className="font-normal">{name}</span>
      </div>

      <div className="mb-2">
        <span className="font-semibold">Gebruikersnaam: </span>
        <span className="font-normal">{username}</span>
      </div>

      <div className="mb-4 border-b border-gray-400 pb-4">
        <span className="font-semibold">Email: </span>
        <span className="font-normal">{email}</span>
      </div>

      <div className="mb-4 flex flex-row justify-between">
        <div className="flex flex-col">
          <span className="mb-2 font-semibold">Voeg profielfoto toe:</span>
          <form onSubmit={handleSubmit}>
            <input
              type="file"
              accept="image/*"
              onChange={(e)=> setAvatar(e.target.files[0])}
            />
            <div>
              <button type="submit">Verstuur</button>
            </div>
          </form>
        </div>

        <div className="pr-4 flex items-center">
          <Image
            src={profilePic ? profilePic : "/images/defaultAvatar.png"}
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
