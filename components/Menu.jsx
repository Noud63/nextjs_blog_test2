import React from "react";
import {items} from "../utils/menuItems"
import Link from "next/link";

const Menu = () => {

  return (
    <div className="mt-4 w-full px-6">
      <div className="grid grid-cols-3 gap-2 max-sm:hidden xl:grid-cols-6">
        {items &&
          items.map((item, index) => (
            <Link href={item.href}>
              <div
                className="flex h-12 w-full cursor-pointer items-center justify-center rounded-lg border-2 text-white max-sm:h-10"
                key={index}
              >
                {item.title}
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Menu;
