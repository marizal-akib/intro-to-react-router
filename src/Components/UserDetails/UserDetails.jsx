import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name,website,username} = user;
    console.log(useLoaderData());
    return (
        <div>
            <h2>Details about user: {name}</h2>
            <h3>{username}</h3>
            <p>Website : {website}</p>
        </div>
    );
};

export default UserDetails;