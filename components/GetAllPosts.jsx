
import SinglePost from "./SinglePost";
import { fetchPosts } from "@/utils/postsRequest";
import Spinner from "./Spinner";

const GetAllPosts = async () => {

  const data = await fetchPosts();
  
  return (
    !data ? <Spinner loading={true}/> : (<div className="mx-auto flex flex-grow w-full max-w-[670px] flex-col rounded-lg py-4">
      {data &&
        data.map((post) => (
          <SinglePost post={post} key={post._id} comments={post.comments} />
        ))}
    </div>
    )
  );
};

export default GetAllPosts;

