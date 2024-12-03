"use client"
import React, {useState} from "react";
import AlleHaltesBus21 from "@/components/praktisch/AllehaltesBus21";
import AlleHaltesTram19 from "@/components/praktisch/AlleHaltesTram19";
import Image from "next/image";
import ImageModal from "@/components/ImageModal";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const OvPage = () => {

   const[open, setOpen] = useState(false)
   const [image, setImage] = useState("")

  const openImageModal = (image) => {
      setOpen(!open)
      setImage(image)
  }

  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  
  return (
    <div className="mt-8">
      {/* <ImageModal open={open} setOpen={setOpen} image={image} /> */}
      <div className="rounded-md bg-white py-2 pl-4 text-lg font-semibold text-yellow-900">
        <span className="font-bold">Openbaar vervoer</span>
      </div>
      <div className="py-8 pl-4 max-xsm:pl-2">
        <p>
          Hier vindt je alle bus en tramlijnen van en naar de Staatsliedenbuurt
          met alle haltes.
        </p>
      </div>
      <div className="rounded-md bg-white py-2 pl-4 text-lg font-semibold text-yellow-900">
        <span className="font-bold">Tramlijnen</span>
      </div>
      <div className="pb-4 pl-4 pt-8 max-xsm:pl-0">
        <div className="mb-4 flex max-w-[330px] flex-row items-center border-b pb-2">
          <span className="text-lg font-semibold">Tramlijn</span>
          <div className="mx-2 flex h-[24px] w-[24px] items-center justify-center rounded-full bg-white pr-[2px] font-bold text-yellow-900">
            19
          </div>
        </div>
        {/* <div className="mb-4 h-auto max-w-[330px]">
          <Image
            src={"/images/lijn19.png"}
            width={330}
            height={0}
            alt="lijn19"
            className="h-full w-full cursor-pointer border-4 object-cover"
            onClick={() => openImageModal("/images/lijn19.png")}
          />
        </div> */}

        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="mb-4 h-auto w-[330px]"
        >
          <a href="/images/lijn19.png">
            <img alt="Tramlijn 19" src="/images/lijn19.png" />
          </a>
        </LightGallery>

        <div>Route: Van Hallstraat - Diemen (Sniep)</div>
        <div>
          Voor vertrektijden{" "}
          <a
            href="https://gvb.nl/reisinformatie/lijn/GVB/19"
            target="_blank"
            alt="lijn19"
            className="underline"
          >
            KLIK HIER
          </a>
        </div>
      </div>
      
      <AlleHaltesTram19 />

      <div className="rounded-md bg-white py-2 pl-4 text-lg font-semibold text-yellow-900">
        <span className="font-bold">Buslijnen</span>
      </div>
      <div className="pb-4 pl-4 pt-8 max-xsm:pl-0">
        <div className="mb-4 flex max-w-[330px] flex-row items-center border-b pb-2">
          <span className="text-lg font-semibold">Buslijn</span>
          <div className="mx-2 flex h-[24px] w-[24px] items-center justify-center rounded-full bg-white pl-[1px] font-bold text-yellow-900">
            21
          </div>
        </div>

        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="mb-4 h-auto w-[330px]"
        >
          <a href="/images/lijn21.png">
            <img alt="Buslijn 21" src="/images/lijn21.png" />
          </a>
        </LightGallery>

        {/* <div className="mb-4 h-auto max-w-[330px]">
          <Image
            src={"/images/lijn21.png"}
            width={330}
            height={0}
            alt="lijn19"
            className="h-full w-full cursor-pointer border-4 object-cover"
            onClick={() => openImageModal("/images/lijn21.png")}
          />
        </div> */}

        <div>Route: De Sav. Lohmanstraat - Centraal Station</div>
        <div>
          Voor vertrektijden{" "}
          <a
            href="https://gvb.nl/reisinformatie/lijn/GVB/21"
            target="_blank"
            alt="lijn21"
            className="underline"
          >
            KLIK HIER
          </a>
        </div>
      </div>
      <AlleHaltesBus21 />
    </div>
  );
};

export default OvPage;
