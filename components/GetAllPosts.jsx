import SinglePost from "./SinglePost"
import {fetchPosts} from "@/utils/postsRequest"



const GetAllPosts = async () => {

  const posts = await fetchPosts()

  console.log("Resultaat:", posts)

return (
  <div className="w-full max-w-[680px] mx-auto mt-4">
      {posts && posts.map((post) => (
        <SinglePost post={post} key={post._id} />
      ))}
    </div>
  )
}

export default GetAllPosts
