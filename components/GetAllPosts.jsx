import AllPosts from './AllPosts';
import {fetchPosts} from "@/utils/postsRequest"

const GetAllPosts = async () => {

  // const [posts, setPosts] = useState()

  // useEffect(() => {
  //   const getPosts = async() => {
  //   const res = await fetch("/api/posts")
  //   const data = await res.json()
  //   console.log(data)
  //   if(res.status === 200 ){
  //     setPosts(data)
  //   }
  //   }
  //   getPosts()
  // },[])

  const posts = await fetchPosts()

return (
  <div className="w-full max-w-[680px] mx-auto mt-4">
      {posts && posts.map((post) => (
        <AllPosts post={post} key={post._id} />
      ))}
    </div>
  )
}

export default GetAllPosts
