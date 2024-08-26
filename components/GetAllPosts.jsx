import SinglePost from "./SinglePost"
import {fetchPosts} from "@/utils/postsRequest"

const GetAllPosts = async () => {

  const posts = await fetchPosts()

return (
  <div className="w-full max-w-[680px] flex justify-between flex-col mx-auto py-4 rounded-lg shadow-md">
    {posts.map((post) => (
      <SinglePost post={post._doc} key={post._doc._id} comments={post.comments}/>
    ))}
  </div>
);
}

export default GetAllPosts
