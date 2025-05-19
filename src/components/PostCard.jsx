function PostCard({ post }) {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>{post.category}</p>
        </div>
    );
};

export default PostCard