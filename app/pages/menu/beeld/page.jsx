import React from "react";
import Image from "next/image";

const BeeldPage = () => {
  const images = [
    {
      src: "/images/straat.jpg",
      alt: "Image 1",
      info: "Fannius Scholtenstraat 1983",
    },
    {
      src: "/images/straat2.jpg",
      alt: "Image 2",
      info: "Van Limburg Stirumplein 1952",
    },
    { src: "/images/lijn19.png", alt: "Image 3", info: "Info about Image 3" },
    { src: "/images/straat.jpg", alt: "Image 4", info: "Info about Image 4" },
    { src: "/images/lijn19.png", alt: "Image 5", info: "Info about Image 5" },
    { src: "/images/straat.jpg", alt: "Image 6", info: "Info about Image 6" },
    { src: "/images/lijn19.png", alt: "Image 1", info: "Info about Image 7" },
    { src: "/images/straat.jpg", alt: "Image 2", info: "Info about Image 8" },
    { src: "/images/straat2.jpg", alt: "Image 3", info: "Info about Image 9" },
    { src: "/images/straat.jpg", alt: "Image 4", info: "Info about Image 10" },
    { src: "/images/lijn19.png", alt: "Image 5", info: "Info about Image 11" },
    { src: "/images/straat.jpg", alt: "Image 6", info: "Info about Image 12" },
    { src: "/images/lijn19.png", alt: "Image 1", info: "Kaart tramlijn 19" },
    { src: "/images/straat.jpg", alt: "Image 2", info: "Info about Image 14" },
    { src: "/images/lijn19.png", alt: "Image 3", info: "Info about Image 15" },
    { src: "/images/straat.jpg", alt: "Image 4", info: "Info about Image 16" },
    { src: "/images/lijn19.png", alt: "Image 5", info: "Info about Image 17" },
    { src: "/images/straat.jpg", alt: "Image 6", info: "Info about Image 18" },
    { src: "/images/lijn19.png", alt: "Image 1", info: "Info about Image 19" },
    { src: "/images/straat.jpg", alt: "Image 2", info: "Info about Image 20" },
    { src: "/images/lijn19.png", alt: "Image 3", info: "Info about Image 21" },
    { src: "/images/straat.jpg", alt: "Image 4", info: "Info about Image 22" },
    { src: "/images/lijn19.png", alt: "Image 5", info: "Info about Image 23" },
    { src: "/images/straat.jpg", alt: "Image 6", info: "Info about Image 24" },
  ];
  return (
    <div className="m-auto mt-8 max-w-[1980px] px-6 text-white max-sm:mt-4 max-sm:px-4">
      <div className="text-lg font-semibold tracking-wide">
        <div className="flex w-full items-center gap-2 rounded-md bg-white py-2 pl-4 text-yellow-900 max-xsm:text-xl">
          <span>De Staatsliedenbuurt in beeld</span>
          <span className="max-xsm:hidden">(1900-heden)</span>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full max-w-full overflow-hidden border border-white"
          >
            <div className="relative h-full w-full">
              <Image
                src={image.src}
                alt={image.alt}
                height={0}
                width={300}
                className="h-full w-full cursor-pointer object-cover px-4 pb-12 pt-4"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-sm text-white">
              {image.info}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeeldPage;
