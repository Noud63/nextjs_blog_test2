"use client"
import React,{useState} from "react";
import { IoIosArrowDown } from "react-icons/io";

const ZorgPage = () => {

  const [dropDown, setDropDown] = useState(false);

  const showListToggleG = () => {
    setDropDown(!dropDown);
  };

  return (
    <div className="mt-8">
      <div className="rounded-md bg-white py-2 pl-4 text-lg font-semibold text-yellow-900">
        <span className="font-bold">Zorg</span>
      </div>
      <div className="py-8 pl-4 max-xsm:pl-2">
        <p>
          Hier vindt je alle mogelijke zorginstellingen in de Staatsliedenbuurt
          zoals huisartsen, tandartsen en fysiotherapeuten.
        </p>
      </div>
      <button
        type="button"
        className="mb-4 flex w-full items-center justify-between rounded-md bg-yellow-700 px-4 py-2 text-lg shadow-lg"
        onClick={showListToggleG}
      >
        <span>Tandartsen</span>
        <IoIosArrowDown
          color="white"
          size={32}
          className={`${dropDown ? "rotate-180" : ""} transition-all duration-700 ease-in-out`}
        />
      </button>
      <div
        className={`transition-height w-full overflow-hidden duration-700 ease-in-out ${
          dropDown ? "h-[380px] opacity-100" : "h-0 opacity-0"
        }`}
          >
        <ul className="flex list-disc flex-col gap-4 pl-4">
          <li>
            <span className="text-xl font-semibold">Florens Tandartsen</span>
            <br />
            Fannius Scholtenstraat 74
            <br />
            1051 GB Amsterdam West
            <br />
            T: 020-3586966
            <br />
            E: info@florenstandartsen.nl
            <br />
            Website:{" "}
            <a href="https://florenstandartsen.nl" target="_blank">
              https://florenstandartsen.nl
            </a>
          </li>
          <li>
            <span className="text-xl font-semibold">
              Tandartspraktijk Westerpark
            </span>
            <br />
            Waterspiegelplein 60
            <br />
            1051 PC Amsterdam
            <br />
            T: 020 - 68 29 424
            <br />
            E: balie@tandartswesterpark.nl
            <br />
            WhatsApp: 06 856 368 63
            <br />
            Website:{" "}
            <a href="https://www.tandartswesterpark.nl" target="_blank">
              https://www.tandartswesterpark.nl
            </a>
          </li>
        </ul>
      </div>
      <div className="mb-4 flex w-full items-center justify-between rounded-md bg-yellow-700 px-4 py-2 text-lg shadow-lg">
        Huisartsen
      </div>
      <div className="mb-4 flex w-full items-center justify-between rounded-md bg-yellow-700 px-4 py-2 text-lg shadow-lg">
        Fysiotherapeut
      </div>
      <div className="mb-4 flex w-full items-center justify-between rounded-md bg-yellow-700 px-4 py-2 text-lg shadow-lg">
        Acupunctuur
      </div>
      <div className="mb-4 flex w-full items-center justify-between rounded-md bg-yellow-700 px-4 py-2 text-lg shadow-lg">
        Psycholoog
      </div>
      <div className="mb-4 flex w-full items-center justify-between rounded-md bg-yellow-700 px-4 py-2 text-lg shadow-lg">
        Haptonoom
      </div>
      <div className="mb-4 flex w-full items-center justify-between rounded-md bg-yellow-700 px-4 py-2 text-lg shadow-lg">
        Chiropractor
      </div>
      <div className="mb-4 flex w-full items-center justify-between rounded-md bg-yellow-700 px-4 py-2 text-lg shadow-lg">
        Plastische chirurgie
      </div>
      <div className="mb-4 flex w-full items-center justify-between rounded-md bg-yellow-700 px-4 py-2 text-lg shadow-lg">
        Dermatologie, Flebologie, Proctologie
      </div>
    </div>
  );
};

export default ZorgPage;
