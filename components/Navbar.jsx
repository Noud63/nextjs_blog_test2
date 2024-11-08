import React from 'react'
import Link from 'next/link';
import Weatherreport from './Weatherreport';
import LoginRegisterLogout from './LoginRegisterLogout';

const Navbar = () => {


  return (
    <div className="navbar flex h-[100px] w-full border-b border-yellow-800 py-3 max-sm:justify-between max-sm:px-4">
      <div className="mx-auto flex w-full max-w-[1980px] flex-row items-center justify-center px-6 max-sm:justify-between max-sm:px-0">
        <div className="flex flex-row items-center">
          <Link href="/">
            <div className="flex flex-col pb-3 leading-3">
              <span className="font-CloisterBlack text-6xl text-white">
                Staatslieden
              </span>
              <span className="text-[#ffcb3b] text-[.76em]">
                webapplicatie voor de Staatsliedenbuurt Amsterdam
              </span>
            </div>
          </Link>
        </div>

        <div className="w-full max-sm:hidden">
          <LoginRegisterLogout />
        </div>

        <Link href="/pages/weatherreport">
          <Weatherreport />
        </Link>
      </div>
    </div>
  );
}

export default Navbar
