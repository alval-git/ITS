import React, {useEffect,useState} from 'react'
import PostService from "../API/PostService"
import CategoryList from "../components/CategoryList/category_list";
import PostList from "../components/PostList/post_list"
import NewPosts from "../components/NewPosts/new_posts"
import '../styles/css/Posts.css'
import CatPostService from "../API/CatPostService";

const AllPosts = () => {
    const [posts, setPosts] = useState([])
    const [newPosts,setNewPosts] = useState([])





    async function fetchPosts(){
        const post_response = await PostService.getAll()
        setPosts(post_response)
    }

    async function fetchNewPosts(){
        const newPostsResponse = await PostService.getNewPosts()
        setNewPosts(newPostsResponse)
    }




    useEffect(()=>{fetchPosts()},[])
    useEffect(()=>{fetchNewPosts()},[])



    return (
        <div className="post-page-wrapper">
            <PostList  posts={posts}/>
            <NewPosts newPosts={newPosts}/>

        </div>
    );
};

export default AllPosts;