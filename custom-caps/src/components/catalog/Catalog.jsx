import React from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import Catalogcards from './CatalogCards';
import Cap from '../../assets/cap.svg';
import { setCaps } from '../../redux/actions/caps';
const Catalog = ({caps}) => {
  return (
    <div className="container">
      <div className="banner__block">
        <div className="banner__title">
          <h3>НОВАЯ СЕРИЯ McLAREN</h3>
        </div>  
      </div>
      <div className="catalogs">
        <div className="catalog__filter">
          <div className="catalog__filter__list">
            <div className="filter__icon">
              <img src="https://cdn-icons-png.flaticon.com/512/32/32195.png" alt="" />
            </div>
            <ul>
              <li>Популярные</li>
              <li>Сначала дешевые</li>
              <li>Сначала дорогие</li>
              <li>Новинки</li>
            </ul>
          </div> 
        </div>
        <div className="catalog__blocks">
            {
                caps.map((obj) => <Catalogcards  key={obj.id} caps={obj} />)  
            }
         
          
        </div>
      </div>
    </div>
  );
};

export default Catalog;
