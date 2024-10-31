import React from "react";
import AddPost from "@/components/AddPost";
import GetAllPosts from "@/components/GetAllPosts";
import Menu from "@/components/Menu";
import LeesDit from "@/components/LeesDit";
import LoginRegisterLogout from "@/components/LoginRegisterLogout";

export default function Home() {
  return (
    <>
      
      <LeesDit />
      <AddPost />
      <GetAllPosts />
    </>
  );
}
