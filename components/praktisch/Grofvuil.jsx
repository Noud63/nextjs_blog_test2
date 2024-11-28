"use client"
import React, {useState} from 'react'
import { IoIosArrowDown } from "react-icons/io";
import WatWeOphalen from './WatWeOphalen';
import WatWeNietOphalen from './WatWeNietOphalen';

const Grofvuil = () => {

  const [dropDown, setDropDown] = useState(false)
  const [dropDown1, setDropDown2] = useState(false)

  const showListToggle1 = () => {
        setDropDown(!dropDown)
  }

  const showListToggle2 = () => {
    setDropDown2(!dropDown1);
  };

  return (
    <div>
      <div className="mt-8">
        <div className="rounded-md bg-white py-2 pl-4 text-lg font-semibold text-yellow-900">
          <span className="font-bold">Grofvuil</span>
        </div>
        <div className="py-8 pl-4">
          <p>
            Grofvuil zijn spullen die niet in een vuilniszak of afvalcontainer
            passen, zoals een magnetron, matras, vloerkleed of tafel.
            <br />
            Breng uw grofvuil gratis naar een recyclepunt. Of laat het ophalen
            door de gemeente.
          </p>
        </div>
      </div>

      <div>
        <div className="rounded-md bg-white py-2 pl-4 text-lg font-semibold text-yellow-900">
          <span className="font-bold">Grofvuil:</span> <span>wegbrengen</span>
        </div>
        <div className="py-8 pl-4">
          <p>
            Breng uw grof afval gratis naar een recyclepunt. Dat bent u er
            meteen vanaf.
            <br /> 7 dagen per week open.
            <br />
            Vanuit de Staatsliedenbuurt is het dichtstbijzijnde recyclepunt:
            <br />
            <br />
            Seineweg (Nieuw-West)
            <br /> Seineweg 1<br /> 1043 BE Amsterdam <br />
            Maandag - zaterdag: 08.00 - 17.00 uur
          </p>
          <span>
            Voor meer informatie,
            <a
              href="https://www.amsterdam.nl/afval-hergebruik/spullen-wegbrengen-recyclepunt/"
              target="_blank"
            >
              <span className="underline"> KLIK HIER.</span>
            </a>
          </span>
        </div>
      </div>

      <div>
        <div className="rounded-md bg-white py-2 pl-4 text-lg font-semibold text-yellow-900">
          <span className="font-bold">Grofvuil:</span>{" "}
          <span>laten ophalen</span>
        </div>
        <div className="flex flex-col">
          <div className="relative w-full">
            <button
              type="button"
              className="mt-4 flex w-full items-center justify-between rounded-md bg-yellow-700 px-4 py-2 shadow-lg"
              onClick={showListToggle1}
            >
              <span>- Wat we ophalen</span>
              <IoIosArrowDown color="white" size={32} />
            </button>
            <WatWeOphalen dropDown={dropDown} />
          </div>

          <div className="w-full">
            <button
              className="mt-4 flex w-full items-center justify-between rounded-md bg-yellow-700 px-4 py-2 shadow-lg"
              onClick={showListToggle2}
            >
              <span>- Wat we niet ophalen</span>
              <IoIosArrowDown color="white" size={32} />
            </button>
            <WatWeNietOphalen dropDown={dropDown1} />
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="rounded-md bg-white py-2 pl-4 text-lg text-yellow-900">
          <span className="font-bold">Ophaaldag grofvuil</span>
        </div>
        <div className="py-8 pl-4">
          <div className="flex flex-row">
            <div className="w-[110px]">Ophaaldag: </div>
            <div className="flex flex-1">Woensdag</div>
          </div>
          <div className="flex flex-row">
            <div className="w-[110px]">Buitenzetten:</div>
            <div className="flex flex-1">
              Dinsdag vanaf 21.00 tot woensdag 07.00 uur
            </div>
          </div>
          <div className="flex flex-row">
            <div className="w-[110px]">Waar:</div>
            <div className="flex flex-1">
              Aan de rand van de stoep of op de vaste plek
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="rounded-md bg-white py-2 pl-4 text-lg font-semibold text-yellow-900">
          <span className="font-bold">Bruikbare spullen</span>
        </div>
        <div className="py-8 pl-4">
          <p>
            Geef spullen die nog bruikbaar zijn een tweede leven.
            <br />
            Verkoop ze of breng ze naar een kringloop- of weggeefwinkel.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Grofvuil
