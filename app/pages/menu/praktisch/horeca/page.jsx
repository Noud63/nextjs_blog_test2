import React from "react";
import Horeca from "@/components/praktisch/Horeca";

const HorecaPage = () => {
  return (
    <div className="mt-8">
      <div className="rounded-md bg-white py-2 pl-4 text-lg font-semibold text-yellow-900 mb-4">
        <span className="font-bold">Horeca</span>
      </div>
      <Horeca />
    </div>
  );
};

export default HorecaPage;
