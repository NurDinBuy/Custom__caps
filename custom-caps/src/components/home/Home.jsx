import React from 'react';
import {useSelector} from 'react-redux';
import {Catalog} from '../catalog';
import HomePage from '../home-page';
import Header from "../header";
import './home.css'

const Home = () => {
    const caps = useSelector(({caps}) => caps.items)
    return (
        <div className="home">
            <div className="container">
                <Header/>
                <Catalog caps={caps}/>
                {/*<HomePage />*/}
            </div>
        </div>
    );
}

export default Home;
