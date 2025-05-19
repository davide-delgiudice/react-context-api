import { useContext } from "react"

import PostCard from "./PostCard";
import PostContext from "../contexts/PostContexts"

function PostList() {

    const posts = useContext(PostContext);

  return (
    <div>
        {posts.map((post) => (
            <PostCard key={`post-${post.id}`} post={post} /> 
        ))}
    </div>
  )
}

export default PostList