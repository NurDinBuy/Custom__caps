import React from 'react';
import './header.css'
import logo from '../../assets/logo.svg'
import {Routes, Route, Link} from 'react-router-dom'
import {Home} from "../home";

const Header = () => {
    return (
        <>
            <div className='header'>
                <div className="logo">
                    <img to='/' src={logo}/>
                </div>
                <div className="navBar">
                    <Link to='/catalog'>Каталог</Link>
                    <Link>Бренды</Link>
                    <Link>О Нас</Link>
                </div>
            </div>
            <Routes>
                <Route path='/' element={<Home />}/>
            </Routes>
        </>
    );
};

export default Header;