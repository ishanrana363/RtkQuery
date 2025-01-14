import React from 'react'
import { usePostByIdQuery } from '../redux/features/post/postApi'
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const {id} = useParams();
    const {data,isError,isLoading} =usePostByIdQuery(id);
    console.log(data)
    if (isLoading) {
        return <div className='' >Loading...</div>;
    }
    return (
        <div>
            <h1>post details</h1>
            <h1>{data.title}</h1>
            <h1>{data.body}</h1>
        </div>
    )
}

export default PostDetails
