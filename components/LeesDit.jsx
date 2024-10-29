import React from 'react'
import Image from 'next/image'
import vinger from "../assets/icons/vinger.png"

const LeesDit = () => {
  return (
    <div className="mx-6 mt-4">
      <div className="singlepost mx-auto flex w-full max-w-[620px] rounded-lg border-2 border-white px-4 py-3">
        <div className="flex flex-row items-center gap-2 text-lg text-white">
          <span className="max-sm:hidden">Wil je een bericht plaatsen?</span>
          <span className="sm:hidden">Bericht posten?</span>
          <Image
            src={vinger}
            width={0}
            height={0}
            sizes="100vh"
            alt="vinger"
            className="h-[15px] w-[35px]"
          />
          <span className="">Lees eerst even dit!</span>
        </div>
      </div>
    </div>
  );
}

export default LeesDit
