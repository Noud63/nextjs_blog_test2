import React from "react";
import AddPost from "@/components/AddPost";
import GetAllPosts from "@/components/GetAllPosts";
import Menu from "@/components/Menu";
import LeesDit from "@/components/LeesDit";
import LoginRegisterLogout from "@/components/LoginRegisterLogout";

export default function Home() {
  return (
    <>
      <div className="w-full max-sm:flex sm:hidden">
        <LoginRegisterLogout />
      </div>

      <Menu />
      <LeesDit />
      <AddPost />
      <GetAllPosts />
    </>
  );
}
