import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    return (
        <div>
            <h2>UserId: {user.id}</h2>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.address.suite}</p>
        </div>
    );
};

export default UserDetails;