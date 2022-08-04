import React from 'react';
import './post_list.css'
import {Link} from "react-router-dom"


const PostList = ({posts}) => {

    if (!posts.length) {
        return (
            <div className="no-posts-message">
            <h1>
                Посты не найдены или вы не авторизовались!
            </h1>
            </div>
        )
    }

    return (

        <div className="post-list-wrapper">
            <div className="post-list">
                {posts.map((post, index) =>
                    <div className="post" key={post.slug}>

                        <img className="poster" src={post.poster} alt=""/>
                        <div className="post-text">
                            <p className="post-title">{post.title}</p>
                            <p className="post-desc">{post.short_description}</p>
                            <div class="more-and-date">
                                <Link className="read-more"  to={'/posts/'+post.slug}>Читать далее</Link>
                                <p>{post.publication_date}</p>
                            </div>
                            <div className="categories-in-post">
                                <div className="categories-in-post">
                                    {post.categories.map((cat)=>
                                        <Link to={'/posts/categories/'+cat.id}  key={cat.slug} className="category">#{cat.name_of_category}</Link>

                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostList