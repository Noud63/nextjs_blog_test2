import React from 'react'

const Menu = () => {
  return (
    <div className="px-6 w-full mt-6">
      <div className="grid grid-cols-3 gap-2 xl:grid-cols-6">
        <div className="h-12 max-sm:h-10 w-full rounded-lg border-2 flex justify-center items-center text-white cursor-pointer">Historie</div>
        <div className="h-12 max-sm:h-10 w-full rounded-lg border-2 flex justify-center items-center text-white cursor-pointer">Socials</div>
        <div className="h-12 max-sm:h-10 w-full rounded-lg border-2 flex justify-center items-center text-white cursor-pointer">Nieuws</div>
        <div className="h-12 max-sm:h-10 w-full rounded-lg border-2 flex justify-center items-center text-white cursor-pointer">Demografie</div>
        <div className="h-12 max-sm:h-10 w-full rounded-lg border-2 flex justify-center items-center text-white cursor-pointer">Beeld</div>
        <div className="h-12 max-sm:h-10 w-full rounded-lg border-2 flex justify-center items-center text-white cursor-pointer">O.V.</div>
        <div className="h-12 max-sm:h-10 w-full rounded-lg border-2 flex justify-center items-center text-white cursor-pointer">Praktisch</div>
        <div className="h-12 max-sm:h-10 w-full rounded-lg border-2 flex justify-center items-center text-white cursor-pointer">Westergas</div>
        <div className="h-12 max-sm:h-10 w-full rounded-lg border-2 flex justify-center items-center text-white cursor-pointer">Buurt</div>
        <div className="h-12 max-sm:h-10 w-full rounded-lg border-2 flex justify-center items-center text-white cursor-pointer">Kunst</div>
        <div className="h-12 max-sm:h-10 w-full rounded-lg border-2 flex justify-center items-center text-white cursor-pointer">Weer</div>
        <div className="h-12 max-sm:h-10 w-full rounded-lg border-2 flex justify-center items-center text-white cursor-pointer">Contact</div>
      </div>
    </div>
  );
}

export default Menu
