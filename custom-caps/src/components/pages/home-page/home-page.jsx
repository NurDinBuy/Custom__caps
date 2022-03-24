import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Slider from './slider/slider';
const HomePage = () => {
    const caps = useSelector(({caps}) => caps.items)
    console.log(caps)
    return (
        <div className="wrapper">
            <div className="banner">
                <div className="main__banner">
                    <div className="main__banner__title">
                        <h2>New Era</h2>
                    </div>
                    <div className="main__banner__sub">
                        <p>
                            Новая коллекция 2021 уже доступны на заказ яркие цвета, винтажный принт 70х,
                            тематические группы и отличное качество
                        </p>
                    </div>
                    <div className="main__banner__button">
                        <Link to='/catalog'>
                            <button className="main__btn">Открыть каталог</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="main__prew">
                <div className="prew__blocks">
                  {
                      caps.map((data) => (
                        <div key={data.id} className="prew__block">
                        <div className="prew__block__img">
                            <img
                                src="https://www.freepnglogos.com/uploads/cap-png/cap-new-caps-png-download-for-picsart-png-download-nsb-7.png"
                                alt=""
                            />
                        </div>
                        <div className="prew__block__price">
                            <p className="price__yr">2021</p>

                                    <p className="price__name">{data.brand}</p>
                                    <div className="price__sub">{data.name}</div>
                                    <div className="price__price">{data.price}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div> 
            <Slider />
        </div>  
    );
};

export default HomePage;
 
