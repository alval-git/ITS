import './new_posts.css'
import {Link} from "react-router-dom";


const NewPosts = ({newPosts})=> {
    if (!newPosts){
       return (
           <h1></h1>
       )
    }else{
        return (
            <div className="news-wrapper">
                <div className="news">
                    {newPosts.map((item, index)=>
                         <div className="news-item">
                            <img className="news-poster" src={item.poster} alt=""/>
                             <h4 className="news-title">{item.title}</h4>
                             <Link className="news-desc" to={'/posts/'+item.slug}>{item.short_description}</Link>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default NewPosts


