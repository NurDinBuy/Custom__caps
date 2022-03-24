import React from 'react';
import Cap from '../../assets/cap.svg';
const Catalogcards = ({ caps }) => {
    
    return (
        <div className="catalog__block">
        <div className="catalog__img">
          <img src={caps.image} alt="" />
        </div>
        <div className="block__des">
          <div className="cap__txts">
            <div className="cap__name">
              
             {caps.brand}
            </div>
            <div className="cap__des">{caps.name}</div>
          </div>
            <div className="cap__price">{caps.price}</div>
        </div>
      </div> 
    );  
}

export default Catalogcards;
