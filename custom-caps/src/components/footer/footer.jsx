import React from 'react';
import './footer.css'
import logo from '../../images/logo.svg'
import linkedin from '../../images/linkedin.svg'
import facebook from '../../images/facebook.svg'
import twitter from '../../images/twitter.svg'


const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className="foot_logo">
                    <img src={logo}/>
                    <div className="foot_text">
                        <h3>Custom caps</h3>
                        <p>Магазин кепок</p>
                    </div>
                </div>
                <p className='pop'>© Copyright 2019 - Lift Media</p>
                <div className="foot_set">
                    <div className="foot_set_item">
                        <img src={linkedin}/>
                    </div>
                    <div className="foot_set_item">
                        <img src={facebook}/>
                    </div>
                    <div className="foot_set_item">
                        <img src={twitter}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;