/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const User = ({user}) => {
    const {id,name,email,phone} = user;
    const userStyle ={
        border: '2px solid indigo',
        padding:'5px',
        borderRadius: '15px'
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>email:{email}</p>
            <p>phone:{phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;