
import React from 'react'
import WatWeOphalen from './WatWeOphalen';
import WatWeNietOphalen from './WatWeNietOphalen';

const Grofvuil = () => {

  return (
    <div>
      <div className="mt-8">
        <div className="rounded-md bg-white py-2 pl-4 text-lg font-semibold text-yellow-900">
          <span className="font-bold">Grofvuil</span>
        </div>
        <div className="py-8 pl-4 max-xsm:pl-2">
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
        <div className="py-8 pl-4 max-xsm:pl-2">
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
      </div>

      <WatWeOphalen />
      <WatWeNietOphalen />

      <div className="mt-12">
        <div className="rounded-md bg-white py-2 pl-4 text-lg text-yellow-900">
          <span className="font-bold">Ophaaldag grofvuil</span>
        </div>
        <div className="py-8 pl-4 max-xsm:pl-2">
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
        <div className="py-8 pl-4 max-xsm:pl-2">
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
