import React, {useEffect,useState} from 'react';
import {useParams} from "react-router-dom";
import PostService from "../API/PostService";
import PostList from "../components/PostList/post_list";
import CatPostService from "../API/CatPostService";
import CategoryList from "../components/CategoryList/category_list";



function PostsByCat() {
    const [posts, setPosts] = useState([])
    const params = useParams()




    async function fetchPostsByCat(id){

        const post_response = await PostService.getByCat(id)
        setPosts(post_response)
        console.log((post_response))
    }



    useEffect(()=>{
        fetchPostsByCat(params.id)},[params.id]
    )




    return (
        <div className="post-page-wrapper">
            <PostList  posts={posts}/>
        </div>
    );
}

export default PostsByCat;