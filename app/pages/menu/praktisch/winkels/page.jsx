import React from "react";
import Winkelbestand from "@/components/praktisch/Winkelbestand";

const WinkelsPage = () => {
  return (
    <div className="mt-8">
      <div className="rounded-md bg-white py-2 pl-4 text-lg font-semibold text-yellow-900 mb-4">
        <span className="font-bold">Winkelbestand</span>
      </div>
      <Winkelbestand />
    </div>
  );
};

export default WinkelsPage;
