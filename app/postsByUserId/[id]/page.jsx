"use client"
import {useState, useEffect}from 'react'
import { useParams } from 'next/navigation'
import { getPostsByUserId } from '@/utils/postsRequest'
import SinglePost from '@/components/SinglePost'


const PostByUserPage = () => {

  const {id} = useParams()

  console.log(id);


  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
        setLoading(true)
    const fetchPosts = async () => {
        if(!id) return

        try {
          const {posts} = await getPostsByUserId(id)
          setPosts(posts)
          setLoading(false)
        } catch (error) {
           console.error("Error fetching property:", error);
        }
    }
    fetchPosts()

  },[id])

  

  return (
    <div className="py-4">
      {posts.map((post) => (
          <SinglePost post={post} key={post._id} comments={post.comments}/>
        ))}
    </div>
  );
}

export default PostByUserPage
