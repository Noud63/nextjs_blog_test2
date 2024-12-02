"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const AlleHaltesBus21 = () => {
  const [dropDown, setDropDown] = useState(false);

  const showListToggleG = () => {
    setDropDown(!dropDown);
  };

  return (
    <div className="relative mb-4">
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
          dropDown ? "h-[690px] opacity-100" : "h-0 opacity-0"
        }`}
      >
        <ul className="list-disc pl-8 pt-4">
          <li>De Sav. Lohmanstraat</li>
          <li>Michel de Klerkhof</li>
          <li>Sam van Houtenstraat</li>
          <li>Aalbersestraat</li>
          <li>Dr. H.Colijnstraat</li>
          <li>Ant. Moddermanstraat</li>
          <li>Plein &#39;40 - &#39;45</li>
          <li>Burg. Eliasstraat</li>
          <li>Burg. Fockstraat</li>
          <li>Burg.de Vlugtlaan</li>
          <li>Bos en Lommerplein</li>
          <li>Egidiusstraat</li>
          <li>Bos en Lommerweg</li>
          <li>Solebaystraat</li>
          <li>Vredenhof</li>
          <li>Van Hallstraat</li>
          <li>V.d. Hoopstraat</li>
          <li>Van Beuningenplein</li>
          <li>Kostverlorenstraat</li>
          <li>F. Hendrikplantsoen</li>
          <li>Marnixplein</li>
          <li>Nw. Willemsstraat</li>
          <li>Haarlemmerplein</li>
          <li>Buiten Oranjestraat</li>
          <li>Buiten Brouwersstraat</li>
          <li>Centraal Station</li>
        </ul>
      </div>
    </div>
  );
};

export default AlleHaltesBus21;
