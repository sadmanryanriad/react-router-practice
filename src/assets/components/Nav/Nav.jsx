import { NavLink } from "react-router-dom";
import './Nav.css';

const Nav = () => {
    return (
        <div className="m-5 flex gap-5 text-red-600 text-xl">
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>About us</NavLink>
            <NavLink to={'/contact'}>Contact Us</NavLink>
            <NavLink to={'/users'}>Users</NavLink>
            <NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active underline hover:bg-yellow-500 hover:rounded-lg" : ""
            } to={'/posts'}>Posts</NavLink>
        </div>
    );
};

export default Nav;