import React, {useState,useEffect} from 'react';
import {Link} from "react-router-dom"
import './navbar.css'
import logo from '../header/logo_its.jpg'
import CatPostService from "../../../API/CatPostService";


const Navbar = () => {
    const [menuActive,setMenuActive] = useState(false)
    const [categories, setCategories] = useState([])

    async function fetchCats(){
        const cat_response = await CatPostService.getAll()
        setCategories(cat_response)
        return 1
    }
    useEffect(()=>{fetchCats()},[])
    return (
            <div>
                <nav>
                    <img src={logo} width="50px" height="50px" alt=""/>
                    <div className={menuActive?'burger-btn active' : 'burger-btn'} onClick={()=>setMenuActive(!menuActive)}>
                        <span/>
                    </div>
                </nav>
                <div className="navbar-wrapper">
                    <div className="navbar-links">
                        <div className="dropCategories nav-link">
                            <Link to="#" className="nav-link categories-link">Категории статей</Link>
                            <div className={"categories"}>
                                {categories.map((cat)=>{
                                    return <Link className="cat-in-nav" to={'posts/categories/' + cat.id} key={cat.slug}>{cat.name_of_category}</Link>
                                    })
                                }
                            </div>
                        </div>
                        <Link to="/posts/" className="nav-link">Статьи</Link>
                        <Link to="/" className="nav-link">База Знаний</Link>
                        <Link to="/" className="nav-link">Профиль</Link>
                        <Link to="/login/"  className="nav-link">Войти</Link>
                    </div>
                </div>

                <div className={menuActive?'menu active' : 'menu'} onClick={()=>setMenuActive(false)}>
                    <div className="menu__content" onClick={e=>e.stopPropagation()}>
                        <div className="menu__header">ITS BLOG</div>
                        <ul className="menu-list">
                            <li className="menu-item"><Link to="/posts" className="burger-link">Статьи</Link></li>
                            <li className="menu-item"><Link to="/" className="burger-link">База знаний</Link></li>
                            <li className="menu-item"><Link to="/" className="burger-link">Профиль</Link></li>
                            <li className="menu-item"><Link to="/" className="burger-link"></Link></li>

                        </ul>
                    </div>
                </div>
            </div>
    );
};

export default Navbar;