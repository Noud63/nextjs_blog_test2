"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import data from "../../../public/adressen.json"

const AllZorgInstanties = () => {

  const [dropDownId, setDropDownId] = useState(null);

  const toggleDropdown = (id) => {
    setDropDownId(dropDownId === id ? null : id);
  };

  return (
     data.map((cat) => (
        <div key={cat.title}>
          <div>
            <button
              type="button"
              className="mb-4 flex w-full items-center justify-between rounded-md bg-yellow-700 px-4 py-2 text-lg shadow-lg"
              onClick={() => toggleDropdown(cat.id)}
            >
              <div className={`${cat.id === 8 ? "w-[120px] px-0 items-start" : ""}`}>{cat.title}</div>
              <IoIosArrowDown
                color="white"
                size={32}
                className={`${dropDownId === cat.id ? "rotate-180" : ""} transition-all duration-700 ease-in-out`}
              />
            </button>
          </div>

          <div
            className={`transition-height w-full overflow-hidden duration-700 ease-in-out ${
              dropDownId === cat.id ? "max-h-[600px] opacity-100" : "max-h-[0px] opacity-0"
            }`}
          >
            <ul className="flex list-disc flex-col gap-4 pl-5 mb-8">
              {cat.items.map((item, index) => (
                <li key={index}>
                <span className="text-xl font-semibold">
                  {item.naam}
                </span>
                <br />
                {item.adres}
                <br/>
                {item.postcode}
                <br />
                T: {item.telefoon}
                <br />
                Website:{" "}
                <a href={item.website} target="_blank">
                  {item.website}
                </a>
              </li>
              ))}
            </ul>
          </div>
        </div>
      ))
  )
}

export default AllZorgInstanties
