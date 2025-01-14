import React from 'react'
import { useDeletePostMutation, usePostByIdQuery } from '../redux/features/post/postApi'
import { useNavigate, useParams } from 'react-router-dom';

const PostDetails = () => {
    const { id } = useParams();
    const { data, isError, isLoading } = usePostByIdQuery(id);
    const [deletePost] = useDeletePostMutation(id)
    console.log(data)
    const handleDelete = () => {
        deletePost(id)
        alert("Post deleted successfully")
    }
    const navigate = useNavigate()
    if (isLoading) {
        return <div className='' >Loading...</div>;
    }
    const handleUpdate = () => {
        navigate(`/post-update/${id}`)
    }
    return (
        <div>
            <h1>post details</h1>
            <h1>{data.title}</h1>
            <h1>{data.body}</h1>
            <div className='space-x-8 mt-3 ' >
                <button onClick={handleDelete} className=' py-2 px-3 bg-green-500 border-none shadow-md text-white font-bold ' >Delete Post</button>
                <button onClick={handleUpdate} className=' py-2 px-3 bg-green-500 border-none shadow-md text-white font-bold ' >Update Post</button>
            </div>
        </div>
    )
}

export default PostDetails
