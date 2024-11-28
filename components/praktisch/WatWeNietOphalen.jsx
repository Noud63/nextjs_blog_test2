"use client";
import React from "react";

const WatWeNietOphalen = ({ dropDown }) => {
  return (
    <div
      className={`transition-height w-full overflow-hidden duration-500 ease-in-out ${
        dropDown ? "h-[180px]" : "h-0"
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
  );
};

export default WatWeNietOphalen;
