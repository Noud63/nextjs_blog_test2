"use client"
import React from 'react'
import Link from 'next/link';
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Image from 'next/image';
import Weatherreport from './Weatherreport';
import LoginRegisterLogout from './LoginRegisterLogout';

const Navbar = () => {


  return (
    <div className="navbar flex w-full flex-row bg-[url('../assets/images/headerbg.png')] bg-center bg-cover bg-no-repeat 
    justify-center items-center border-b border-yellow-950 px-6 py-3 max-sm:justify-between">
      <div className="flex flex-row items-center justify-between">
        <Link href="/">
          <div className="flex flex-col pb-3 leading-3">
            <span className="font-CloisterBlack text-6xl text-white">
              Staatslieden
            </span>
            <span className="text-[.76em] text-orange-300">
              webapplicatie voor de Staatsliedenbuurt Amsterdam
            </span>
          </div>
        </Link>
      </div>

      <div className="w-full max-sm:hidden">
        <LoginRegisterLogout />
      </div>

      <Link href="/weatherreport">
        <Weatherreport />
      </Link>
    </div>
  );
}

export default Navbar
