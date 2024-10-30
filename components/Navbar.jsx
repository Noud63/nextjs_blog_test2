import React from 'react'
import Link from 'next/link';
import Weatherreport from './Weatherreport';
import LoginRegisterLogout from './LoginRegisterLogout';

const Navbar = () => {


  return (
    <div className="navbar flex w-full h-[100px] flex-row 
    justify-center items-center border-b border-yellow-800 px-6 py-3 max-sm:justify-between max-sm:px-4">
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
