import React from "react";
import { InwonersAantallen } from "@/components/infographics/InwonersChart";
import { Inkomensverschillen } from "@/components/infographics/InkomensChart";

const DemografiePage = () => {
  return (
    <div className="mt-8 px-6 text-white max-sm:mt-4 max-sm:px-4">
      <div className="flex justify-center border-b-2 text-2xl font-semibold tracking-wide">
        <span className="px-4 pb-4">Demografie</span>
      </div>
      <div className="border-b-2 py-8 pl-4">
        <p>
          Hier vindt je de demografische gegevens van de wijk.
          <br />
          Maar wat is demografie eigenlijk? <br />
          Demografie is bevolkingsonderzoek of bevolkingsleer. <br />
          Demografie onderzoekt hoe een bevolkingsgroep (gemeenschap) is
          samengesteld.
          <br />
          Hierbij wordt gekeken naar bijvoorbeeld leeftijd, geslacht,
          nationaliteit, etniciteit, opleidingsniveau, burgerlijke staat en
          beroep. <br />
          Hierbij heb je ook te maken met sociale wetenschappen als geografie,
          sociologie, antropologie en geschiedenis, maar ook exacte
          wetenschappen als statistiek en wiskunde.
        </p>
      </div>

      <div className="mt-8 rounded-md bg-yellow-700 py-2 pl-4 text-lg font-semibold text-white shadow">
        <span className="font-semibold">Inwonersaantallen 2014 - 2024</span>
      </div>

      <div className="text-md mt-6 px-4">
        De afgelopen 10 jaar is het inwonersaantal in de Staatsliedenbuurt met
        250 gestegen.
        <br />
        Beweeg met je muis over het staafdiagram voor de exacte aantallen per
        jaar.
      </div>

      <InwonersAantallen />

      <div className="mt-12 rounded-md bg-yellow-700 py-2 pl-4 text-lg font-semibold text-white shadow">
        <span className="font-semibold">Inkomensverdeling</span>
      </div>

      <Inkomensverschillen />
    </div>
  );
};

export default DemografiePage;
