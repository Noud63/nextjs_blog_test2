"use client"
import React from 'react'
import Link from 'next/link';
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Image from 'next/image';
import Weatherreport from './Weatherreport';

const Navbar = () => {

  const { data: session, status } = useSession();

  return (
    <div className="w-full flex justify-center m-auto pt-4 pb-4 flex-col px-4">

      <div className="flex flex-row items-center justify-between">
        
        <Link href="/">
          <div className="flex flex-col pb-3 leading-3">
            <span className="text-white text-6xl font-CloisterBlack">
              Staatslieden
            </span>
            <span className="text-orange-300 text-[.76em]">
              webapplicatie voor de Staatsliedenbuurt Amsterdam
            </span>
          </div>
        </Link>

        <Link href="weatherreport">
          <Weatherreport />
        </Link>

      </div>

      <div className="w-full flex flex-row justify-end items-center py-2 gap-4 text-white border-t border-white">
        {!session ? (
          <Link href="/register" className="">
            Registreer
          </Link>
        ) : (
          ""
        )}

        <div className="flex gap-4">
          {!session?.user ? (
            <Link href="/login" className="w-full flex justify-end pr-3">
              Inloggen
            </Link>
          ) : (
            <Link href="/profile" className="flex justify-start items-center ">
              <span className="flex justify-start items-center ">{`Hi, ${session?.user?.username}`}</span>
            </Link>
          )}

          {session?.user && (
            <button
              className=" mr-4"
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
