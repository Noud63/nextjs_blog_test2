import React from "react";
import Link from "next/link";
import { items } from "../utils/menuItems";
import { IoMdCloseCircleOutline } from "react-icons/io";

const MenuOverlay = ({ setOpenModal, openModal }) => {
  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div
      className={`${openModal ? "translate-x-0" : "translate-x-full"} fixed bottom-0 right-0 top-0 z-[999] flex h-full max-h-screen w-full max-w-[500px] flex-col items-center justify-start overflow-y-auto bg-gradient-to-r from-white/60 via-white/40 to-white/60 p-4 backdrop-blur-lg transition duration-300 ease-in`}
      onClick={closeModal}
    >
      <div className="my-8 cursor-pointer" onClick={closeModal}>
        <IoMdCloseCircleOutline size={35} color="#713f12" />
      </div>
      <div className="grid w-full grid-cols-2 gap-2 rounded-xl">
        {items &&
          items.map((item, index) => (
            <div key={index}>
              <div className="flex h-12 w-full cursor-pointer items-center justify-center rounded-lg border-[3px] border-yellow-900 font-semibold tracking-wide text-yellow-900 shadow-lg">
                {item.title}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MenuOverlay;
