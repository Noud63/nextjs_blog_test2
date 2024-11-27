import React from "react";

const PraktischPage = () => {
  return (
    <div className="mt-8 px-6 text-white max-sm:mt-4">
      <div className="flex justify-center border-b-2 pb-2 text-2xl font-semibold tracking-wide">
        <span>Praktische informatie</span>
      </div>
      <div className="border-b-2 pb-4">
        <ul className="list-disc gap-2 px-5 pt-4 text-lg">
          <li>Ophalen grofvuil</li>
          <li>Afvalcontainers</li>
          <li>Openbaar vervoer</li>
          <li>Winkelbestand</li>
          <li>Horeca</li>
        </ul>
      </div>
    </div>
  );
};

export default PraktischPage;
