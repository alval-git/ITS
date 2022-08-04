import React, {useEffect, useState} from 'react';
import PostService from "../API/PostService";
import {useParams} from "react-router-dom";
import dompurify from 'dompurify'
import '../styles/css/Post.css'


const PostBySlug = () => {
    const sanitizer = dompurify.sanitize;
    const params = useParams()
    const [post, setPost] = useState({})

    async function fetchPostBySlug(slug){

        const post_response = await PostService.getBySlug(slug)
        setPost(post_response)
    }



    useEffect(()=>{
        fetchPostBySlug(params.id)},[params.id]
    )

    // PostService.getUser()

    return (
        <React.StrictMode>
        <div className="post-wrapper-detail">
            <div className="post-detail">
                <p className="post-title-detail">{post.title}</p>
                <div className="post-content-detail" dangerouslySetInnerHTML={{__html:sanitizer(post.post_body)}} />
            </div>
        </div>
        </React.StrictMode>
    )
}

export default PostBySlug