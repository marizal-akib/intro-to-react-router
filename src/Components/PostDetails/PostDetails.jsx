import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const {postId} = useParams();
    const {id, title, body} = post;
    const handleGoBack = () =>{
        navigate(-1)
    }
    console.log(postId);
    return (
        <div>
            <h3>Post details about: {id} </h3>
            <p>Title:{title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go Back</button>
            
        </div>
    );
};

export default PostDetails;