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
      className={`${openModal ? "translate-x-0" : "translate-x-full"} fixed bottom-0 right-0 top-0 z-[999] flex h-full w-full flex-col items-center justify-start 
      bg-gradient-to-r from-yellow-900/60 via-yellow-700/60 to-yellow-900/60 p-4 backdrop-blur-lg transition duration-300 ease-in`}
      onClick={closeModal}
    >
      <div className="my-8 cursor-pointer" onClick={closeModal}>
        <IoMdCloseCircleOutline size={35} color="white" />
      </div>
      <div className="grid w-full grid-cols-2 gap-2 border-2 rounded-xl p-2">
        {items &&
          items.map((item, index) => (
            <div key={index}>
              <div className="shadow-lg flex h-12 w-full cursor-pointer items-center justify-center rounded-lg border-2 border-white font-normal text-white">
                {item.title}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MenuOverlay;
