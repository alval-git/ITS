import React, {useState} from 'react';
import '../../styles/css/login.css'
import useScript from "../../hooks/UseScript";
import {Link, useNavigate} from "react-router-dom";
import axiosInstance from "../../components/axios";
import isAuthenticated from "../../components/utils/isAuthenticated";

function SignUp() {
    useScript("https://kit.fontawesome.com/d217f3423b.js")
    const history = useNavigate()
    const initialFormData = Object.freeze({
        username: '',
        password: "",
    })
    return (
        <div className="reg-page-wrapper">
            <div className="reg-form-wrapper">
                <form className="reg-form" action="">
                    <div className="reg-input-wrapper">
                        <input  id="username" name="username" className="reg-form-input"
                               placeholder="Логин" type="text"/>
                        <i className="fas fa-user" aria-hidden="true"></i>
                    </div>
                    <div className="password-input-wrapper">
                        <input  id="password" name="password" className="reg-form-input"
                               placeholder="Пароль" type="password"/>
                        <i className="fas fa-lock" aria-hidden="true"></i>
                    </div>


                    <div className="links-wrapper">
                        <Link to="">Забыли пароль?</Link>
                        <Link to="">Войти</Link>
                    </div>
                    <div className="allauth">
                        <Link to=""><i className="fab fa-google" aria-hidden="true"></i></Link>
                        <Link to=""><i className="fab fa-facebook-f" aria-hidden="true"></i></Link>
                    </div>
                    <div className="btn-wrapper">
                        <button  className="login-btn" type="submit">Зарегистрироваться</button>
                    </div>

                </form>
            </div>
        </div>

    );
};

export default SignUp