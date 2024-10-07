import SinglePost from "./SinglePost"
import {fetchPosts} from "@/utils/postsRequest"

const GetAllPosts = async () => {

  const posts = await fetchPosts()
  // console.log(posts)

return (
  <div className="w-full max-w-[680px] flex justify-between flex-col mx-auto py-4 rounded-lg">
    {posts.map((post) => (
      <SinglePost post={post} key={post._id} comments={post.comments} />
    ))}
  </div>
);
}

export default GetAllPosts
