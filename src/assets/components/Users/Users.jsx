import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData();
    return (
        <>
            <h2>User number: {users.length}</h2>
        <div className="grid grid-cols-5">
            {users.map(user=> <User key={user.id} user={user}></User>)}
        </div>
        </>
    );
};

export default Users;