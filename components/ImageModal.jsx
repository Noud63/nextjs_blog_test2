import React from 'react'
import Image from 'next/image'

const ImageModal = ({open, setOpen, image}) => {
  return (
    open && (
      <div
        className="fixed bottom-0 left-0 right-0 top-0 z-[999] flex w-full items-center justify-center overflow-y-auto bg-yellow-950/80"
        onClick={() => setOpen(false)}
      >
        <div className="h-auto w-[900px] border-t-8 border-x-8 border-white transition duration-500 ">
          <Image
            src={image}
            width={900}
            height={0}
            alt="lijn19"
            className="h-auto w-auto cursor-pointer object-cover"
          />
          <div className="bg-white text-yellow-900 py-4">Tramlijn 19</div>
        </div>
      </div>
    )
  );
}

export default ImageModal
