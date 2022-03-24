import React from 'react';
import './style.css';
const HomePage = () => {
  return (
    <div className="wrapper">
      <div className="banner">
        <div className="container">
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
              <button className="main__btn">Открыть каталог</button>
            </div>
          </div>
        </div>
      </div>
      <div className="main__prew">
        <div className="prew__blocks">
          <div className="prew__block">
            <div className="prew__block__img">
              <img
                src="https://www.freepnglogos.com/uploads/cap-png/cap-new-caps-png-download-for-picsart-png-download-nsb-7.png"
                alt=""
              />
            </div>
            <div className="prew__block__price">
              <p className="price__yr">2021</p>

              <p className="price__name">New Era</p>
              <div className="price__sub">Houston Rockets</div>
              <div className="price__price">2399c</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
 