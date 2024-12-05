import React, {useState} from 'react'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Image from 'next/image';

const Tramlijn19 = () => {

    const [open, setOpen] = useState(false);

     const slides = [
       {
         src: `/images/lijn19.png`,
         alt: "ovlijn",
         width: "100%",
         height: "auto",
       },
     ];

  return (
    <div>
      <div className="mb-4 h-auto max-w-[330px]">
        <Image
          src={"/images/lijn19.png"}
          width={330}
          height={0}
          alt=""
          className="h-full w-full cursor-pointer border-4 object-cover"
          onClick={() => setOpen(true)}
        />
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Zoom]}
        zoom={{
          scrollToZoom: true,
          maxZoomPixelRatio: 5,
        }}
        slides={slides}
        carousel={{ finite: slides.length <= 1 }}
        render={{
          buttonPrev: slides.length <= 1 ? () => null : undefined,
          buttonNext: slides.length <= 1 ? () => null : undefined,
        }}
        styles={{
          container: {
            backgroundColor: "rgb(66, 32, 6, 0.8)",
          },
        }}
      />
    </div>
  );
}

export default Tramlijn19
