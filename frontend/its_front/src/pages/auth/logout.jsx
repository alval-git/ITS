import React, { useEffect } from 'react';
import axiosInstance from "../../components/axios";
import { useNavigate } from 'react-router-dom';

export default function Logout() {
	const history = useNavigate();

	useEffect(() => {
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		axiosInstance.defaults.headers['Authorization'] = null;
		history('/login/');
	});
	return <div>Logout</div>;
}