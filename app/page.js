import React from "react";
import AddPost from "@/components/AddPost";
import GetAllPosts from "@/components/GetAllPosts";
import Menu from "@/components/Menu";
import LeesDit from "@/components/LeesDit";

export default function Home() {
  return (
    <>
      <Menu />
      <LeesDit />
      <AddPost />
      <GetAllPosts />
    </>
  );
}
