import React from 'react'

import {BrowserRouter} from "react-router-dom";
import Header from "./components/UI/header/header"
import Navbar from "./components/UI/navbar/navbar"
import './styles/css/app.css'
import AppRouter from "./components/AppRoutes";
import Footer from "./components/UI/footer/footer";

function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <Navbar/>
            <main>
                <AppRouter/>
            </main>
            <Footer/>
        </BrowserRouter>
        <script src="https://kit.fontawesome.com/d217f3423b.js" crossOrigin="anonymous"></script>
    </div>

  )
}

export default App;
