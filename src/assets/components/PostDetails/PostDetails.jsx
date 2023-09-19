import {useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {id,title,body} = post;

    const navigate = useNavigate('/posts');

    function handleClick() {
        navigate(-1)
    }

    return (
        <div className="border-2 border-solid border-green-600 w-96 mx-auto">
            <h2 className="text-yellow-600">{id} </h2>
            <h2 className="text-red-600">{title} </h2>
            <h2 className="text-blue-600">{body} </h2>
            <button onClick={handleClick} className="bg-blue-600 text-white p-5 rounded-xl w-full">Go back</button>
        </div>
    );
};

export default PostDetails;