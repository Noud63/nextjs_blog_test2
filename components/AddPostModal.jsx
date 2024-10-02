"use client";
import React, { useState, useEffect } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useRouter } from "next/navigation";


const AddPostModal = ({ inView, setInView }) => {

  const [newFiles, setNewFiles] = useState({ images: [] });
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const closeModal = () => {
    setInView(false);
    setNewFiles({ images: [] });
  };

  const handleChange = (e) => {
    const { files } = e.target;
    const addedImages = [...newFiles.images];

    for (const file of files) {
      addedImages.push(file);
    }
    setNewFiles((prevState) => ({
      ...prevState,
      images: addedImages,
    }));
  };


const deleteSelectedImage = (name) => {
      const newArray = newFiles.images.filter((img) => img.name !== name)
      console.log(newArray)
      setNewFiles((prevState) => ({
        ...prevState,
        images: newArray,
      }));
}


  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true)
    
    const formData = new FormData(e.target);

    newFiles.images.forEach((file) => {
        formData.append("images", file);
    })
   
    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        body: formData,
      });
       if(res.status === 200){
        //  router.push("/")
         closeModal()
         setLoading(false)
       }
      
    } catch (error) {
      console.log(error)
    }
    router.refresh();
  };

 
return (
  inView && (
    <div className="w-full h-full fixed top-0 left-0 right-0  bg-yellow-950/70 flex justify-center items-center z-[999]">
      <div className="postmodal w-full max-w-[500px] bg-white rounded-lg shadow-md p-4 mx-4">
        <div className="w-full flex flex-row justify-between items-center border-b border-gray-300 pb-2">
          <div className="text-lg font-semibold">Schrijf een bericht</div>
          <div className="cursor-pointer" onClick={closeModal}>
            <IoMdCloseCircleOutline size={35} color={"#854d0e"} />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <textarea
            name="postContent"
            id="content"
            cols="30"
            rows="10"
            className="w-full border border-gray-300 mt-4 outline-none p-2"
            required
          />

          <span className="pb-2">Voeg een afbeelding toe:</span>

          <div className="mt-2">
            <input
              multiple
              type="file"
              // id="images"
              // name="images"
              accept="image/*"
              onChange={handleChange}
              className=""
            />

            <div className="text-md mt-2 mb-2 border-b border-gray-300 pb-2">
              {newFiles.images.length > 0
                ? `${newFiles.images.length} bestand(en) geselecteerd.`
                : ""}
            </div>
          </div>

          <div className="mb-4">
            {newFiles.images.length > 0
              ? newFiles.images.map((img) => (
                  <div
                    className="flex flex-row w-full items-center py-1"
                    key={img.name}
                  >
                    {img.name}
                    <IoMdCloseCircleOutline
                      size={20}
                      color="red"
                      className="pt-1 cursor-pointer"
                      onClick={() => deleteSelectedImage(img.name)}
                    />
                  </div>
                ))
              : ""}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-950 via-yellow-700 to-yellow-950 rounded-lg flex justify-center py-3 text-white text-lg"
          >
            {loading ? <span>....even geduld!</span> : "Plaatsen"}
          </button>
        </form>
      </div>
    </div>
  )
);
};

export default AddPostModal;
