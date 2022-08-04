import React, {useState} from 'react';
import '../../styles/css/login.css'
import useScript from "../../hooks/UseScript";
import {Link, useNavigate} from "react-router-dom";
import axiosInstance from "../../components/axios";
import isAuthenticated from "../../components/utils/isAuthenticated";

function Login() {
    useScript("https://kit.fontawesome.com/d217f3423b.js")
    const history = useNavigate()
    const initialFormData = Object.freeze({
        username: '',
        password: "",
    })

    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
        e.preventDefault();
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axiosInstance
            .post(`token/`, {
                username: formData.username,
                password: formData.password
            })
            .then((res) => {
                localStorage.setItem('access_token', res.data.access)
                localStorage.setItem('refresh_token', res.data.refresh)
                axiosInstance.defaults.headers['Authorization'] = 'JWT ' + localStorage.getItem('access_token')
                history('/posts')
            })



    }


    return (
        <div className="log-page-wrapper">
            <div className="login-form-wrapper">
                <form className="login-form" action="">
                    <div className="login-input-wrapper">
                        <input onChange={handleChange} id="username" name="username" className="log-form-input"
                               placeholder="Логин" type="text"/>
                        <i className="fas fa-user" aria-hidden="true"></i>
                    </div>
                    <div className="password-input-wrapper">
                        <input onChange={handleChange} id="password" name="password" className="log-form-input"
                               placeholder="Пароль" type="password"/>
                        <i className="fas fa-lock" aria-hidden="true"></i>
                    </div>


                    <div className="links-wrapper">
                        <Link to="">Забыли пароль?</Link>
                        <Link to="">Зарегистрироваться</Link>
                    </div>
                    <div className="allauth">
                        <Link to=""><i className="fab fa-google" aria-hidden="true"></i></Link>
                        <Link to=""><i className="fab fa-facebook-f" aria-hidden="true"></i></Link>
                    </div>
                    <div className="btn-wrapper">
                        <button onClick={handleSubmit} className="login-btn" type="submit">Войти</button>
                    </div>

                </form>
            </div>
        </div>

    );
};

export default Login