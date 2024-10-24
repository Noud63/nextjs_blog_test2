"use client";
import React, { useState, useRef, useEffect } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useRouter } from "next/navigation";
import Image from "next/image";

const EditPostForm = ({ setShowEditForm, post }) => {
  const [postContent, setPostContent] = useState(post?.postContent);
  const [inputFiles, setInputFiles] = useState({ images: [] });

  const inputFilesRef = useRef(null);
  const textareaRef = useRef(null);

  const router = useRouter();

  const updatedData = {
    postContent,
    images: inputFiles?.images,
  };

  // Open file browser
  const handleUploadImage = () => {
    if (!inputFilesRef.current) return;
    inputFilesRef.current?.click();
  };

  // Add new image file to state
  const handleChange = (event) => {
    if (!event.target.files) return;

    const { files } = event.target;

    const addedImages = [...inputFiles.images];

    for (const file of files) {
      addedImages.push(file);
    }

    setInputFiles((prevState) => ({
      ...prevState,
      images: addedImages,
    }));
  };

  const handleEditPost = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    updatedData.images.forEach((file) => {
      formData.append("images", file);
    });

    formData.append("postContent", updatedData.postContent);

    try {
      const res = await fetch(`/api/editpost/${post._id}`, {
        method: "PUT",
        body: formData,
      });

      const data = await res.json();

      if (res.status === 200) {
        console.log(data.message);
        setShowEditForm(false);
      }
    } catch (error) {
      console.log(error);
      console.log(data.message);
    }
    router.refresh();
  };


  const deleteSelectedImage = (name) => {
    const newArray = inputFiles.images.filter((img) => img.name !== name);
    setInputFiles((prevState) => ({
      ...prevState,
      images: newArray,
    }));
    inputFilesRef.current.value = "";
  };


  const closeModal = () => {
    setShowEditForm(false);
  };


  const deleteImage = async () => {
       try {
           const res = await fetch(`/api/deleteImage/${post._id}`,{
              method: "DELETE"
           })

           const data = await res.json()
           if(res.status === 200){
            console.log(data.message)
           }

       } catch (error) {
          console.log(error)
       }
       router.refresh();
       setShowEditForm(false)
  }

  // Adjust the textarea height whenever the comment changes
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset the height
      textarea.style.height = `${textarea.scrollHeight}px`; // Set it to the scroll height
    }
  }, [postContent]);

  return (
    <div className="w-full h-full fixed top-0 left-0 right-0 bg-yellow-950/70 flex justify-center items-center z-[999]">
      <div className="w-full max-w-[500px] bg-white postmodal rounded-lg px-4 h-auto mx-4">
        <div className="flex justify-between items-center py-4 border-b border-black">
          <span className="text-xl font-semibold">Bewerk:</span>
          <div
            className="flex items-center cursor-pointer"
            onClick={closeModal}
          >
            <IoMdCloseCircleOutline size={35} color={"#854d0e"} />
          </div>
        </div>

        <form onSubmit={handleEditPost} className="w-full mt-2">
          <div className="w-full">
            <textarea
              ref={textareaRef}
              type="text"
              name="postContent"
              defaultValue={postContent}
              // onChange={(e) => setPostContent(e.target.value)}
              className="w-full min-h-[50px] resize-none overflow-y-hidden rounded-xl py-2 pr-10 outline-none placeholder-gray-500 bg-white"
            />
          </div>

          <div className="relative mt-2 h-full min-h-[250px] border border-gray-300 rounded-lg">
            {post?.images[0] && (
              <Image
                src={post.images[0]}
                width={500}
                height={300}
                alt=""
                sizes="100vw"
                className="rounded-lg opacity-50"
              />
            )}

            {post?.images[0] ? (
              <div className="absolute flex flex-row gap-2 p-4 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <div
                  className="editbuttons2 flex justify-center items-center font-semibold w-[120px] max-w-[150px] bg-white py-1 rounded-lg cursor-pointer border border-yellow-800"
                  onClick={handleUploadImage}
                >
                  Vervang
                </div>
                <div
                  className="editbuttons2 flex justify-center items-center font-semibold w-[120px] max-w-[150px] bg-white py-1 rounded-lg cursor-pointer border border-yellow-800"
                  onClick={deleteImage}
                >
                  Verwijder
                </div>
              </div>
            ) : (
              <div className="absolute p-4 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <div
                  className="editbuttons flex justify-center items-center font-semibold w-[120px] max-w-[150px] bg-white px-4 py-2 rounded-lg cursor-pointer border border-gray-400"
                  onClick={handleUploadImage}
                >
                  Afbeelding
                </div>
              </div>
            )}
          </div>

          <div>
            <input
              multiple
              type="file"
              style={{ display: "none" }}
              ref={inputFilesRef}
              accept="image/*"
              onChange={handleChange}
            />
          </div>

          <div className="my-4">
            {inputFiles.images.length > 0 &&
              inputFiles.images.map((img) => (
                <div
                  className="flex flex-row w-full items-center py-1 gap-2"
                  key={img.name}
                >
                  <span className="font-semibold">Geselecteerd :</span>
                  <span>{img.name}</span>
                  <IoMdCloseCircleOutline
                    size={20}
                    color="red"
                    className="pt-1 cursor-pointer"
                    onClick={() => deleteSelectedImage(img.name)}
                  />
                </div>
              ))}
          </div>

          <div className="w-full flex justify-end mt-4 mb-8">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-950 via-yellow-700 to-yellow-950 rounded-lg text-white font-semibold py-4"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPostForm;
