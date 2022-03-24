import React from 'react';
import './header.css'
import logo from '../../images/logo.svg'
import {Link, Route, Routes} from 'react-router-dom'
import HomePage from "../pages/home-page";
import Catalog from "../pages/catalog";

const Header = () => {
    return (
        <>
            <div className='header'>
                <div className="logo">
                    <Link to='/'><img src={logo}/></Link>
                </div>
                <div className="navBar">
                    {/*<a href="">Каталог</a>*/}
                    {/*<a href="">Бренды</a>*/}
                    {/*<a href="">О Нас</a>*/}
                    <Link to='/catalog'>Каталог</Link>
                    {/*<Link to=''>Бренды</Link>*/}
                    {/*<Link to=''>О Нас</Link>*/}
                </div>
            </div>

        </>
    );
};

export default Header;