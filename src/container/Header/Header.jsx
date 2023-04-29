import React from 'react';
import { Link } from 'react-router-dom';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">Take a break, have a cupcake</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Welcome to our world of delicious cupcakes! Our website is dedicated to bringing you the most mouth-watering and indulgent treats, made with only the finest ingredients.</p>
      <Link to = "/menu" className='custom__button' style={{paddingLeft : "30px"}}>Explore Menu</Link>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" style={{height : '400px' , width: '500px' , marginLeft : "30px"}}/>
    </div>
  </div>
);

export default Header;
