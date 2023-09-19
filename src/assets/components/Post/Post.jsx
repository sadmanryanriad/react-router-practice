import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
const Post = ({ post }) => {
    const { id, title, body } = post;

    const navigate = useNavigate();

    function handleNavigate(){
        navigate(`/posts/${id}`)
    }

    return (
        <div>
            <h2 className="text-green-600">{id}</h2>
            <h2 className="text-red-600">{title}</h2>
            <h2>{body}</h2>
            <button onClick={handleNavigate} className='text-green-600 font-bold'>show details using setNavigation</button> <br />
            <Link className='text-blue-600 font-bold' to={`/posts/${id}`}>Show Details</Link>
        </div>
    );
};
Post.propTypes = {
    post: PropTypes.object
}
export default Post;