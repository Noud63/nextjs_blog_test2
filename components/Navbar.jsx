"use client"
import React from 'react'
import Link from 'next/link';
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const Navbar = () => {

  const { data: session, status } = useSession();

  return (
    <div className="w-full max-w-[680px] flex justify-center m-auto pt-4 pb-4 flex-col">
      <Link href="/">
        <span className="text-white text-6xl font-CloisterBlack tracking-widest flex justify-center items-center py-4">
          S t a a t s l i e d e n
        </span>
      </Link>

      <div className="w-full flex flex-row justify-between items-center  py-4 text-white bg-gradient-to-r from-green-950 via-green-700 to-green-950 rounded-lg">
        {!session ? (
          <Link href="/register" className="w-1/2 flex justify-start pl-4">
            Nog geen account?
          </Link>
        ) : (
          ""
        )}

        <div className="flex w-full justify-between">
          {!session?.user ? (
            <Link href="/login" className="w-full flex justify-end pr-4">
              Inloggen
            </Link>
          ) : (
            <Link
              href="/profile"
              className="w-[220px] flex justify-start items-center "
            >
              <span className="w-[220px] flex justify-start ml-8 items-center ">{`Hi, ${session?.user?.username}`}</span>
            </Link>
          )}

          {session?.user && (
            <button
              className=" mr-8"
              onClick={() => {
                signOut({ callbackUrl: "/", redirect: true });
              }}
            >
              <span>Uitloggen</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar
