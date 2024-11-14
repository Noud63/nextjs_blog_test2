"use client";
import { useState, useEffect } from "react";
import SinglePost from "./SinglePost";
import { useRouter } from "next/navigation";
import Spinner from "./Spinner";
import { fetchPosts } from "@/utils/postsRequest";

const GetAllPosts = () => {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const result = await fetchPosts();
      if (result) {
        setData(result);
        setLoading(false);
      }
    };
    getData();
  }, []);

  return loading ? (
    <Spinner loading={loading} />
  ) : (
    <div className="mx-auto flex w-full max-w-[670px] flex-grow flex-col rounded-lg py-4">
      {data &&
        data.map((post) => (
          <SinglePost post={post} key={post._id} comments={post.comments} />
        ))}
    </div>
  );
};

export default GetAllPosts;
