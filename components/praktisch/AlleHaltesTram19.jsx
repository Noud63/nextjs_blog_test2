"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const AlleHaltesTram19 = () => {
  const [dropDown, setDropDown] = useState(false);

  const showListToggleG = () => {
    setDropDown(!dropDown);
  };

  return (
    <div className="relative mb-12">
      <button
        type="button"
        className="flex w-full items-center justify-between rounded-md bg-yellow-700 px-4 py-2 shadow-lg"
        onClick={showListToggleG}
      >
        <span>Alle haltes</span>
        <IoIosArrowDown
          color="white"
          size={32}
          className={`${dropDown ? "rotate-180" : ""} transition-all duration-700 ease-in-out`}
        />
      </button>
      <div
        className={`transition-height w-full overflow-hidden duration-700 ease-in-out ${
          dropDown ? "h-[650px] opacity-100" : "h-0 opacity-0"
        }`}
      >
        <ul className="list-disc pl-8 pt-4">
          <li>Van Hallstraat</li>
          <li>Van L.Stirumstraat</li>
          <li>De Wittenkade</li>
          <li>Nassaukade</li>
          <li>F.Hendrikplantsoen</li>
          <li>Hugo de Grootplein</li>
          <li>De Clercqstraat</li>
          <li>Kinkerstraat</li>
          <li>Overtoom</li>
          <li>Leidseplein</li>
          <li>Spiegelgracht</li>
          <li>Vijzelgracht</li>
          <li>Frederiksplein</li>
          <li>Weesperplein</li>
          <li>K.&#39;s-Gravesandestr.</li>
          <li>Alexanderplein</li>
          <li>1e v.Swindenstraat</li>
          <li>Wijttenbachstraat</li>
          <li>Oostpoort</li>
          <li>Hogeweg</li>
          <li>Hugo de Vrieslaan</li>
          <li>Kruislaan</li>
          <li>Brinkstraat</li>
          <li>Arent Krijtsstraat</li>
          <li>Diemerbrug</li>
          <li>Diemen (Sniep)</li>
        </ul>
      </div>
    </div>
  );
};

export default AlleHaltesTram19;
