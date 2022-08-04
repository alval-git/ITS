import React from 'react';
import './header.css'
import logo_its from './logo_its.jpg'
import mail from './mail.png'
import vk from './vk.png'
import inst from './instagram.png'




const Header = () => {
    return (

        <div className="header-wrapper">
            <div className="header">
                <div className="logo-wrapper">
                    <img className="logo" src={logo_its} alt=""/>
                </div>
                <div className="social-links-wrapper">
                    <a href="/" className="social-link inst"><img className="social-icon" src={inst} alt=""/></a>
                    <a href="/" className="social-link mail"><img className="social-icon" src={mail} alt=""/></a>
                        <a href="/" className="social-link vk"><img className="social-icon" src={vk} alt=""/></a>
                </div>
            </div>
        </div>

    );
};

export default Header;