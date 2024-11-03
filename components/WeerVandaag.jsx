import React from "react";
import Image from "next/image";

const WeerVandaag = ({ data }) => {
  return (
    <div className="mt-4 rounded-lg border-2 p-2">
      {/* <div className="mb-4 flex text-sm">
        Geüpdatet: {data.tijd} uur
      </div> */}
      <div className="mb-10 mt-8 flex justify-center text-5xl">
        Amsterdam
      </div>

      <div className="relative flex flex-col items-center justify-center">
        {data?.icon && (
          <Image
            src={data.icon}
            width="100"
            height="80"
            alt="icon"
            className="h-[90px] w-auto drop-shadow-[0_2px_4px_rgba(113,63,18,1)]"
          />
        )}
        <div className="absolute -bottom-2 flex justify-center text-lg text-yellow-800 font-semibold">
          {data.description}
        </div>
      </div>

      <div className="mt-10 flex flex-row items-center justify-center">
        <span className="text-6xl text-yellow-800">
          {" "}
          {Math.round(`${data.temp}`)}
          {`\xB0C`}
        </span>
      </div>

      <div className="mt-12 grid w-full grid-cols-3 grid-rows-2 bg-white/60 text-yellow-900 font-semibold">
        <div className="flex items-center justify-center bg-yellow-800 max-xmd:bg-[#662909] py-2 text-white">
          MaxTemp
        </div>
        <div className="cell flex items-center justify-center bg-yellow-800 max-xmd:bg-[#662909] py-2 text-white">
          MinTemp
        </div>
        <div className="cell flex items-center justify-center bg-yellow-800 max-xmd:bg-[#662909] text-white">
          Wind
        </div>
        <div className="flex items-center justify-center border-b border-l border-yellow-800">
          {data.tempMax}
          {`\xB0C`}
        </div>
        <div className="flex items-center justify-center border-b border-l border-yellow-800">
          {data.tempMin}
          {`\xB0C`}
        </div>
        <div className="f flex items-center justify-center border-b border-l border-r border-yellow-800">
          {data.wind} bft
        </div>
      </div>

      <div className="mt-4 grid w-full grid-cols-3 grid-rows-2 bg-white/60 text-yellow-900 font-semibold">
        <div className="flex items-center justify-center bg-yellow-800 max-xmd:bg-[#662909] py-2 text-white">
          Druk
        </div>
        <div className="cell flex items-center justify-center bg-yellow-800 max-xmd:bg-[#662909] text-white">
          Zicht
        </div>
        <div className="cell flex items-center justify-center bg-yellow-800 max-xmd:bg-[#662909] text-white">
          Vocht
        </div>
        <div className="flex items-center justify-center border-b border-l border-yellow-800">
          {data.pressure} hPa
        </div>
        <div className="f flex items-center justify-center border-b border-l border-yellow-800">
          {data.visibility} m
        </div>
        <div className="flex items-center justify-center border-b border-l border-r border-yellow-800">
          {data.humidity} %
        </div>
      </div>

      <div className="my-8 flex flex-row font-semibold">
        <div className="flex w-1/3 flex-col items-center justify-center gap-2">
          <span className="text-lg">Zon op</span>
          <Image src="/icons/sun.png" width={40} height={40} alt="" />
          <span>{data.sunrise} uur</span>
        </div>
        <div className="flex w-1/3 flex-col items-center justify-center gap-2"></div>
        <div className="flex w-1/3 flex-col items-center justify-center gap-2">
          <span className="text-lg">Zon onder</span>
          <Image src="/icons/moon.png" width={40} height={40} alt="" />
          <span>{data.sunset} uur</span>
        </div>
      </div>
    </div>
  );
};

export default WeerVandaag;
