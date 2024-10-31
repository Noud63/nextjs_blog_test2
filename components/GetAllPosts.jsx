"use client";
import { useEffect, useState } from "react";
import SinglePost from "./SinglePost";
import { fetchPosts } from "@/utils/postsRequest";
import Spinner from "./Spinner";

const GetAllPosts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
       setLoading(true);
       try {
         const posts = await fetchPosts();
         setData(posts);
       } catch (error) {
        console.error("Error fetching posts:", error);
       } finally {
        setLoading(false);
       }
    };
    getData();
  }, []);

  return (
    loading ? <Spinner loading={loading}/> : (<div className="mx-auto flex flex-grow w-full max-w-[670px] flex-col rounded-lg py-4">
      {data &&
        data.map((post) => (
          <SinglePost post={post} key={post._id} comments={post.comments} />
        ))}
    </div>
    )
  );
};

export default GetAllPosts;
