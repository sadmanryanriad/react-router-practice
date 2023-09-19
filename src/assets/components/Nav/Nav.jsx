import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="m-5 flex gap-5 text-red-600 text-xl">
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About Us</Link>
            <Link to={'/contact'}>Contact Us</Link>
            <Link to={'/users'}>Users</Link>
            <Link to={'/posts'}>Posts</Link>
        </div>
    );
};

export default Nav;