"use client"
import Image from "next/image";
import edit from "../assets/icons/edit.png";
import deleteIcon from "../assets/icons/delete.png";
import { useRouter } from "next/navigation";

const Editordelete = ({showOptions, setShowOptions, postId}) => {

const router = useRouter();
  
  const editPost = async () => {
    //  try {
    //   const res = await fetch(`/api/editPost/${postId}`, {
    //     method: "PUT",
    //   });

    //   const data = await res.json();

    //   if (res.ok) {
    //     console.log(data.message);
    //   }
    // } catch (error) {
    //   console.log(data.message);
    // }
    // setShowOptions(false);
    // router.refresh();
  };

  const deletePost = async () => {
    try {
      const res = await fetch(`/api/deletepost/${postId}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (res.ok) {
        console.log(data.message);
      }
    } catch (error) {
      console.log(data.message);
    }
    setShowOptions(false);
    router.refresh();
  };

  return (
    showOptions && (
      <div className="postMenu absolute top-12 right-14 flex flex-col h-auto w-[240px] bg-white rounded-lg p-4 text-lg font-semibold ">
        <div
          className="w-full border-b border-gray-400 pb-2 mb-2 flex flex-row cursor-pointer"
          onClick={editPost}
        >
          <Image
            src={edit}
            alt=""
            width={32}
            height={32}
            className="w-[32px] h-[32px] cursor-pointer p-2"
          />
          <span>Bewerk</span>
        </div>
        <div
          className="w-full flex flex-row cursor-pointer"
          onClick={deletePost}
        >
          <Image
            src={deleteIcon}
            alt=""
            width={32}
            height={32}
            className="w-[32px] h-[32px] cursor-pointer p-2"
          />
          <span>Verwijder</span>
        </div>
      </div>
    )
  );
};

export default Editordelete;
