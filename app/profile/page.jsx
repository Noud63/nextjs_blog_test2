"use client"
import React from 'react'
import { useSession } from 'next-auth/react'

const ProfilePage = () => {

    const { data: session} = useSession()

    const name = session?.user?.name
    const username = session?.user?.username
    const email = session?.user?.email

  return (
    <div className="w-full max-w-[680px] mx-auto text-white px-4">
        <div>Jouw Profiel:</div>
        
        <div>Naam: {name}</div>
        <div>Gebruikersnaam: {username}</div>
        <div>email: {email}</div>
    </div>
  )
}

export default ProfilePage
