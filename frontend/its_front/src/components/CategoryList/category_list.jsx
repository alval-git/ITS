import React from 'react'
import {Link} from "react-router-dom"
import './category_list.css'

const CategoryList = ({categories}) => {
    if(!categories){
        return
    }
    return (
        <aside>
                <div className="cats-header">
                     <p>Популярные теги</p>
                </div>
                <div className="cats">

                    {categories.map((cat,index)=>
                    {
                        return <Link className="cat-link" to={'/posts/categories/' + cat.id} key={cat.id}>{cat.name_of_category}</Link>
                    }
                    )}


                </div>

        </aside>
    );
};

export default CategoryList