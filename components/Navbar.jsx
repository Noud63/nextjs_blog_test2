"use client"
import React from 'react'
import Link from 'next/link';
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Image from 'next/image';

const Navbar = () => {

  const { data: session, status } = useSession();

  return (
    <div className="w-full max-w-[680px] flex justify-center m-auto pt-4 pb-4 flex-col">
      <Link href="/" className="flex flex-row items-center">
        <span className="text-white text-6xl font-CloisterBlack py-4">
          Staatslieden
        </span>
        {/* <div className="flex flex-row justify-between ">
          <Image
            src={"/images/fanniusscholten.png"}
            alt=""
            width={45}
            height={45}
            className="w-[45px] h-[45px] mt-2 ml-8 singlepost rounded-full border-2 border-white"
          />
          <Image
            src={"/images/gijsbertkarelvanhogendorp.png"}
            alt=""
            width={45}
            height={45}
            className="w-[45px] h-[45px] mt-2 ml-2 singlepost rounded-full border-2 border-white"
          />
          <Image
            src={"/images/coenraadvanbeuningen.png"}
            alt=""
            width={45}
            height={45}
            className="w-[45px] h-[45px] mt-2 ml-2 singlepost rounded-full border-2 border-white"
          />
          <Image
            src={"/images/fanniusscholten.png"}
            alt=""
            width={45}
            height={45}
            className="w-[45px] h-[45px] mt-2 ml-2 singlepost rounded-full border-2 border-white"
          />
          <Image
            src={"/images/groenvanprinsterer.png"}
            alt=""
            width={45}
            height={45}
            className="w-[45px] h-[45px] mt-2 ml-2 singlepost rounded-full border-2 border-white"
          />
          <Image
            src={"/images/dekempenaer.png"}
            alt=""
            width={45}
            height={45}
            className="w-[45px] h-[45px] mt-2 ml-2 singlepost rounded-full border-2 border-white"
          />
          <Image
            src={"/images/vanboetzelaer.png"}
            alt=""
            width={45}
            height={45}
            className="w-[45px] h-[45px] mt-2 ml-2 singlepost rounded-full border-2 border-white"
          />
        </div> */}
      </Link>

      <div className="w-full flex flex-row justify-between items-center py-4 text-white border-2 rounded-lg">
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
