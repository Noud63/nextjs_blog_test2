"use client";
import React, {useState} from "react";
import { IoIosArrowDown } from "react-icons/io";

const WatWeNietOphalen = () => {

  const [dropDown, setDropDown] = useState(false);

  const showListToggle = () => {
    setDropDown(!dropDown);
  };

  return (
    <div className="relative">
      <button
        className="mt-4 flex w-full items-center justify-between rounded-md bg-yellow-700 px-4 py-2 shadow-lg"
        onClick={showListToggle}
      >
        <span>- Wat ze niet ophalen</span>
        <IoIosArrowDown
          color="white"
          size={32}
          className={`${dropDown ? "rotate-180" : ""} transition-all duration-700 ease-in-out`}
        />
      </button>
      <div
        className={`w-full overflow-hidden transition-all duration-700 ease-in-out ${
          dropDown ? "h-[180px] opacity-100" : "h-0 opacity-0"
        }`}
      >
        <ul className="list-disc pl-8 pt-4">
          <li>Bouw en sloopafval</li>
          <li>Karton</li>
          <li>Klein chemisch afval, zoals verf en accu&#39;s</li>
          <li>Kleine elektrische apparaten</li>
          <li>Glasplaten en spiegels</li>
          <li>Tuintegels</li>
          <li>Autobanden</li>
          <li>Auto onderdelen</li>
          <li>Overige motoren</li>
          <li>Stenen, zand en aarde</li>
        </ul>
      </div>
    </div>
  );
};

export default WatWeNietOphalen;
