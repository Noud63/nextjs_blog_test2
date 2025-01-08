import React from 'react'
import Link from 'next/link';
import Weatherreport from './Weatherreport';
import LoginRegisterLogout from './LoginRegisterLogout';

const Navbar = () => {


  return (
    <div className="navbar flex h-[100px] w-full border-b border-yellow-800 py-3 max-sm:justify-between max-sm:px-4">
      <div className="mx-auto flex w-full max-w-[1980px] flex-row items-center justify-center px-6 max-sm:justify-between max-sm:px-0 max-xsm:justify-center">
        <div className="flex flex-row items-center">
          <Link href="/">
            <div className="flex flex-col pb-3 leading-3 tracking-wide border pr-2">
              <span className="font-CloisterBlack text-6xl tracking-wide text-white">
                Staatslieden
              </span>
              <span className="text-[.75em] text-[#ffcb3b]">
                webapplicatie voor de Staatsliedenbuurt Amsterdam
              </span>
            </div>
          </Link>
        </div>

        <div className="w-full max-sm:hidden">
          <LoginRegisterLogout />
        </div>

        <Link href="/pages/weatherreport" className="max-xsm:hidden">
          <Weatherreport />
        </Link>
      </div>
    </div>
  );
}

export default Navbar
