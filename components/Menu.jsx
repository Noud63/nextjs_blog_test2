import React from "react";
import {items} from "../utils/menuItems"
import Link from "next/link";

const Menu = () => {

  return (
    <div className="w-full max-w-[1980px] mt-4 px-6 mx-auto">
      <div className="grid grid-cols-3 gap-2 max-sm:hidden xl:grid-cols-6">
        {items &&
          items.map((item, index) => (
            <Link href={item.href} key={index}>
              <div className="flex h-12 w-full cursor-pointer items-center justify-center rounded-lg border-2 text-white max-sm:h-10">
                {item.title}
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Menu;
