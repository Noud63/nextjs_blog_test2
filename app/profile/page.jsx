"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const { data: session, update } = useSession();

  const name = session?.user?.name;
  const username = session?.user?.username;
  const email = session?.user?.email;
  
  const router = useRouter();

  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!avatar){
      alert("No file selected!")
      return
    }

     setLoading(true);

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

      const result = await res.json();

      console.log(res)

      await update();

      if (res.status === 200) {
        setLoading(false);
        setTimeout(() => {
          router.push("/");
        }, 2000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full flex justify-center mt-[20]">
      <div className="singlepost w-full max-w-[650px] mx-4 p-4 bg-white rounded-lg text-black">
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
                onChange={(e) => setAvatar(e.target.files[0])}
              />
              <div className="w-full mt-4 bg-gradient-to-r from-yellow-900 via-yellow-700 to-yellow-900 rounded-lg p-1">
                <button
                  type="submit"
                  className="w-full py-2  rounded-lg text-white font-semibold "
                >
                  {loading ? "...even geduld" : "Verstuur"}
                </button>
              </div>
            </form>
          </div>

          <div className="pr-4 flex items-center mb-16">
            <Image
              src={
                session?.user?.avatar
                  ? session?.user?.avatar
                  : "/images/defaultAvatar2.png"
              }
              alt=""
              width={50}
              height={50}
              className="w-[50px] h-[50px] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
