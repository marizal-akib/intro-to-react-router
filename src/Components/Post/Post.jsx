/* eslint-disable react/prop-types */

import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {

    const navigate = useNavigate();

    const {id, title} = post;
    const postStyle ={
        border: '2px solid indigo',
        padding:'5px',
        borderRadius: '15px'
    }

    const handleShowDetail= () =>{
        navigate(`/post/${id}`)

    }


    return (
        <div style={postStyle}>
            <h4>Post Of Id: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}><button>Post Details</button></Link>
            <button onClick={handleShowDetail}>Click to show details</button>
        </div>
    );
};

export default Post;