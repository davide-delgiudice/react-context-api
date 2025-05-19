import { useContext } from "react"

import PostContext from "../contexts/PostContexts"

function PostList() {

    const posts = useContext(PostContext);

  return (
    <div>
        {posts.map((post) => (
            <div key={`post-${post.id}`}>
                <p>{post.title}</p>
            </div>
        ))}
    </div>
  )
}

export default PostList