"use client"
import React from 'react'

const WatWeOphalen = ({dropDown}) => {
  return (
    <div
      className={`transition-height w-full overflow-hidden duration-500 ease-in-out ${
        dropDown ? "h-[190px]" : "h-0"
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
  );
}

export default WatWeOphalen
