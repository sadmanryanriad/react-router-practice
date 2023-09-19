import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div className="grid grid-cols-4 gap-10 ">
            {posts.map((post,idx) =><Post key={idx} post={post}></Post>)}
            <h2>hello</h2>
        </div>
    );
};

export default Posts;