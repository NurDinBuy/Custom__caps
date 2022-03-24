import React from 'react';
import './header.css'
import logo from '../../images/logo.svg'
import loupe from '../../images/loupe.svg'
import shop from '../../images/shopping.svg'
import {Link} from 'react-router-dom'


const Header = () => {
    return (
        <>
            <div className='header'>
                <div className="logo">
                    <Link to='/'><img src={logo}/></Link>
                </div>
                <div className="navBar">
                    <Link className="link" to='/catalog'>Каталог</Link>
                    <Link className="link" to=''>Бренды</Link>
                    <Link className="link" to=''>О Нас</Link>
                </div>
                <ul className='search-block'>
                    <input className='search' type="text" />
                    <img src={loupe} />
                </ul>
                <img className='shop' src={shop}/>
            </div>
        </>
    );
};

export default Header;