"use client";
import React, {useState} from "react";
import { IoIosArrowDown } from "react-icons/io";

const WatWeOphalen = () => {
  const [dropDown, setDropDown] = useState(false);

  const showListToggleG = () => {
    setDropDown(!dropDown);
  };

  return (
    <div className="relative mb-4">
      <button
        type="button"
        className="mt-4 flex w-full items-center justify-between rounded-md bg-yellow-700 px-4 py-2 shadow-lg"
        onClick={showListToggleG}
      >
        <span>- Wat ze ophalen</span>
        <IoIosArrowDown
          color="white"
          size={32}
          className={`${dropDown ? "rotate-180" : ""} transition-all duration-700 ease-in-out`}
        />
      </button>
      <div
        className={`transition-height w-full overflow-hidden duration-700 ease-in-out ${
          dropDown ? "h-[190px] opacity-100" : "h-0 opacity-0"
        }`}
      >
        <ul className="list-disc pl-8 pt-4">
          <li>Banken</li>
          <li>Bedden en matrassen</li>
          <li>Koelkast of wasmachine</li>
          <li>Kasten</li>
          <li>Planken</li>
          <li>Stoelen</li>
          <li>Tapijten en vloerbedekking</li>
          <li>Tuinmeubels</li>
          <li>Tuinafval</li>
        </ul>
      </div>
    </div>
  );
};

export default WatWeOphalen;
