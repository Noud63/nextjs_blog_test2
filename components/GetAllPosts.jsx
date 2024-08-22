import SinglePost from "./SinglePost"
import {fetchPosts} from "@/utils/postsRequest"

const GetAllPosts = async () => {

  const posts = await fetchPosts()
  const sortedPosts = posts.sort((a, b) => b.createdAt.localeCompare(a.createdAt))

return (
  <div className="w-full max-w-[680px] flex justify-between flex-col mx-auto py-4 rounded-lg shadow-md mt-2">
    {sortedPosts.map((post) => (
      <SinglePost post={post} key={post._id} />
    ))}
  </div>
);
}

export default GetAllPosts
