import React from 'react';
import {useSelector} from 'react-redux';
import Catalog from "../pages/catalog";
import HomePage from '../pages/home-page';
import Header from "../header";
import './home.css'
import {Route, Routes} from "react-router-dom";
import Footer from "../footer";

const Home = () => {
    const caps = useSelector(({caps}) => caps.items)
    return (
        <>
            <div className="home">
                <div className="container">
                    <Header/>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/catalog' element={<Catalog caps={caps}/>}/>
                    </Routes>
                    <Footer/>
                </div>
            </div>

        </>
    );
}

export default Home;
