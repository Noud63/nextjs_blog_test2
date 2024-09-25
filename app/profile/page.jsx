"use client"
import React from 'react'
import { useSession } from 'next-auth/react'

const ProfilePage = () => {

    const { data: session} = useSession()

    const name = session?.user?.name
    const username = session?.user?.username
    const email = session?.user?.email

    const handleImageUpload = (e) => {
        const [file] = e.target.files;
           if (!file) return;
        const { size, type } = file;
        console.log(file)
      }

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

      <div className="mb-4 flex flex-col">
        <span className="mb-2 font-semibold">Voeg profielfoto toe:</span>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleImageUpload(e)}
        />
      </div>
    </div>
  );
}

export default ProfilePage
