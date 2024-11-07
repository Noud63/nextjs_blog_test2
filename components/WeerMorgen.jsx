import React from 'react'
import Image from 'next/image';

const WeerMorgen = ({data2}) => {
  return (
    <div className="mt-4 rounded-lg border-2 p-2 font-semibold">
      <div className="mb-10 mt-8 flex justify-center text-5xl">Amsterdam</div>

      <div className="relative flex flex-col items-center justify-center">
        {data2.icon && (
          <Image
            src={data2?.icon}
            width="100"
            height="80"
            alt="icon"
            className="h-[90px] w-auto drop-shadow-[0_2px_4px_rgba(113,63,18,1)]"
          />
        )}
        <div className="absolute -bottom-2 flex justify-center text-lg text-yellow-800">
          {data2.description}
        </div>
      </div>

      <div className="mt-10 flex flex-row items-center justify-center">
        <span className="text-6xl text-yellow-800">
          {" "}
          {Math.round(`${data2.temp}`)}
          {`\xB0C`}
        </span>
      </div>

      <div className="mt-12 grid w-full grid-cols-3 grid-rows-2 bg-white/60 text-yellow-900">
        <div className="flex items-center justify-center bg-yellow-800 py-2 text-white max-lg:bg-[#662909]">
          MaxTemp
        </div>
        <div className="cell flex items-center justify-center bg-yellow-800 py-2 text-white max-lg:bg-[#662909]">
          MinTemp
        </div>
        <div className="cell flex items-center justify-center bg-yellow-800 text-white max-lg:bg-[#662909]">
          Wind
        </div>
        <div className="flex items-center justify-center border-b border-l border-yellow-800">
          {data2.tempMax}
          {`\xB0C`}
        </div>
        <div className="flex items-center justify-center border-b border-l border-yellow-800">
          {data2.tempMin}
          {`\xB0C`}
        </div>
        <div className="f flex items-center justify-center border-b border-l border-yellow-800">
          {data2.wind} bft
        </div>
      </div>

      <div className="mb-4 mt-4 grid w-full grid-cols-3 grid-rows-2 bg-white/60 text-yellow-900">
        <div className="flex items-center justify-center bg-yellow-800 py-2 text-white max-lg:bg-[#662909]">
          druk
        </div>
        <div className="cell flex items-center justify-center bg-yellow-800 text-white max-lg:bg-[#662909]">
          zicht
        </div>
        <div className="cell flex items-center justify-center bg-yellow-800 text-white max-lg:bg-[#662909]">
          Vocht
        </div>
        <div className="flex items-center justify-center border-b border-l border-yellow-800">
          {data2.pressure} hPa
        </div>
        <div className="f flex items-center justify-center border-b border-l border-yellow-800">
          {data2.visibility} m
        </div>
        <div className="flex items-center justify-center border-b border-l border-r border-yellow-800">
          {data2.humidity} %
        </div>
      </div>
    </div>
  );
}

export default WeerMorgen
