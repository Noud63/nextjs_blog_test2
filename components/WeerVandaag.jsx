import {useState, useEffect} from "react";
import Image from "next/image";
import convertTime from "@/utils/convertTime";

const WeerVandaag = ({ data, sunMoon }) => {

  const now = new Date()
  const options = {
  month: "short",
  day: "numeric",
};
const date = now.toLocaleDateString('nl-NL', options).split(" ")
const monthShort = date[1][0].toUpperCase() + date[1].slice(1)

useEffect(() => {
  if (sunMoon.length > 0) {
    const sunrise = convertTime(sunMoon[0].Rise);
    const sunset = convertTime(sunMoon[0].Set);

    data.sunrise = sunrise;
    data.sunset = sunset;
  }
}, [sunMoon]);

  return (
    <div className="mt-4 rounded-lg border-2 p-2">
      <div className="mb-10 mt-8 flex justify-center text-5xl font-semibold">
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
        <div className="absolute -bottom-2 flex justify-center text-lg font-semibold text-yellow-800 [text-shadow:_0_7px_4px_rgb(161_98_7_/_70%)]">
          {data.description}
        </div>
      </div>

      <div className="mt-10 flex flex-row items-center justify-center">
        <span className="bg-gradient-to-b from-yellow-600 to-yellow-900 bg-clip-text text-6xl font-semibold text-transparent text-yellow-700 [text-shadow:_0_18px_7px_rgb(161_98_7_/_70%)]">
          {" "}
          {Math.round(`${data.temp}`)}
          {`\xB0C`}
        </span>
      </div>

      <div className="mt-12 grid w-full grid-cols-3 grid-rows-2 bg-white/60 font-semibold text-yellow-900">
        <div className="flex items-center justify-center bg-yellow-800 py-2 text-white max-lg:bg-[rgb(102,41,9)]">
          MaxTemp
        </div>
        <div className="cell flex items-center justify-center bg-yellow-800 py-2 text-white max-lg:bg-[#662909]">
          MinTemp
        </div>
        <div className="cell flex items-center justify-center bg-yellow-800 text-white max-lg:bg-[#662909]">
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

      <div className="mt-4 grid w-full grid-cols-3 grid-rows-2 bg-white/60 font-semibold text-yellow-900">
        <div className="flex items-center justify-center bg-yellow-800 py-2 text-white max-lg:bg-[#662909]">
          Druk
        </div>
        <div className="cell flex items-center justify-center bg-yellow-800 text-white max-lg:bg-[#662909]">
          Zicht
        </div>
        <div className="cell flex items-center justify-center bg-yellow-800 text-white max-lg:bg-[#662909]">
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

      <div className="my-8 flex flex-row justify-between font-semibold">
        <div className="flex w-1/3 flex-col items-center justify-center gap-4">
          <span className="text-lg">Zon op</span>
          <Image
            src="/icons/sun.png"
            width={35}
            height={35}
            alt=""
            className="w-auto drop-shadow-[0_2px_4px_rgba(113,63,18,1)]"
          />
          <span>{data.sunrise} uur</span>
        </div>

        <div className="flex h-[135px] w-1/5 flex-col items-center justify-between">
          <span className="flex justify-center text-lg text-white">
            {monthShort}
          </span>
          <span className="flex justify-center pb-2 text-6xl text-[#ffcb3b] drop-shadow-[0_2px_4px_rgba(113,63,18,.5)]">
            {date[0]}
          </span>
          <span className="text-white-800 flex justify-center">
            {data?.date && data.date.slice(0, 4)}
          </span>
        </div>
        <div className="flex w-1/3 flex-col items-center justify-center gap-4">
          <span className="text-lg">Zon onder</span>
          <Image
            src="/icons/moon.png"
            width={35}
            height={35}
            alt=""
            className="w-auto drop-shadow-[0_2px_4px_rgba(113,63,18,1)]"
          />
          <span>{data.sunset} uur</span>
        </div>
      </div>
    </div>
  );
};

export default WeerVandaag;
