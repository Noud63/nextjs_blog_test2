
import React from "react";
import Image from "next/image";
import Grofvuil from "@/components/praktisch/Grofvuil";

const PraktischPage = () => {
  return (
    <div className="mt-8 px-6 text-white max-sm:mt-4 max-sm:px-4">
      <div className="flex justify-center border-b-2 text-2xl font-semibold tracking-wide">
        <div className="px-4 pb-4">Praktische informatie</div>
      </div>
      <div className="w-full border-b-2 pb-4">
        <div className="flex flex-col gap-2 px-2 pt-4 text-lg max-xsm:px-0">
          <div className="flex items-center gap-2">
            <div className="flex h-[24px] w-[40px] justify-center">
              <Image
                src={"/icons/grofvuil.png"}
                alt="grofvuil"
                width={26}
                height={20}
                className="h-[24px] w-[32px] object-cover"
              />
            </div>
            <div className="pl-2">Grofvuil</div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex h-[24px] w-[40px] justify-center">
              <Image
                src={"/icons/afvalcontainer.png"}
                alt="afval"
                width={26}
                height={20}
                className="h-[24px] w-[20px] object-cover"
              />
            </div>
            <div className="pl-2">Afvalcontainers</div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex h-[20px] w-[40px] justify-center">
              <Image
                src={"/icons/ov.png"}
                alt="ov"
                width={26}
                height={20}
                className="h-[20px] w-[26px] object-cover"
              />
            </div>
            <div className="pl-2">Openbaar vervoer</div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex h-[24px] w-[40px] justify-center">
              <Image
                src={"/icons/winkels.png"}
                alt="winkels"
                width={100}
                height={0}
                className="h-[24px] w-[24px] object-cover"
              />
            </div>
            <div className="pl-2">Winkelbestand</div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex h-[24px] w-[40px] justify-center">
              <Image
                src={"/icons/horeca.png"}
                alt="horeca"
                width={100}
                height={0}
                className="h-[24px] w-[30px] object-cover"
              />
            </div>
            <div className="pl-2">Horeca</div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex h-[24px] w-[40px] justify-center">
              <Image
                src={"/icons/dienstverlening.png"}
                alt="diensten"
                width={100}
                height={0}
                className="h-[24px] w-[24px] object-cover"
              />
            </div>
            <div className="pl-2">Dienstverlening</div>
          </div>
        </div>
      </div>

      <Grofvuil />

      <div className="mx-auto mt-20 flex h-[50px] w-[50px] justify-center">
        <Image
          src={"/icons/recycle.png"}
          alt="recycle"
          width={100}
          height={0}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default PraktischPage;
