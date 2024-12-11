"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import data from "../../../public/adressen.json"

const AllZorgInstanties = () => {

  const [dropDownId, setDropDownId] = useState(null);

  const toggleDropdown = (id) => {
    setDropDownId(dropDownId === id ? null : id);
  };

  return data.map((cat) => (
    <div key={cat.title}>
      <div>
        <button
          type="button"
          className="mb-4 flex w-full items-center justify-between rounded-md bg-yellow-700 px-4 py-2 text-lg shadow-lg"
          onClick={() => toggleDropdown(cat.id)}
        >
          <span>{cat.title}</span>
          <IoIosArrowDown
            color="white"
            size={32}
            className={`${dropDownId === cat.id ? "rotate-180" : ""} transition-all duration-700 ease-in-out`}
          />
        </button>
      </div>

      <div
        className={`transition-height w-full overflow-hidden duration-700 ease-in-out ${
          dropDownId === cat.id
            ? "max-h-[760px] opacity-100"
            : "max-h-[0px] opacity-0"
        }`}
      >
        <ul className="mb-8 flex list-disc flex-col gap-4 pl-5">
          {cat.items.map((item, index) => (
            <li key={index}>
              <span className="text-xl font-semibold">{item.naam}</span>
              {item.adres && <div>{item.adres}</div>}
              {item.postcode && <div>{item.postcode}</div>}
              {item.telefoon && <div>T: {item.telefoon}</div>}
              {item.email && <div>E: {item.email}</div>}
              {item.website && (
                <div>
                  Website:{" "}
                  <a
                    href={item.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.website}
                  </a>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ));
}

export default AllZorgInstanties
