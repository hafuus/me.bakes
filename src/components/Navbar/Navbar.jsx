import React from 'react';
import image from '../../constants/image';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import {MdOutlineCake } from 'react-icons/md';
import { Link } from 'react-router-dom';
// import { AboutUs } from '../../container';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
   <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      {/* <img src={images.gericht} alt= "app logo"/> */}
      <img src={image.logg} alt= "app logo"/>
    </div>
    <div className="app__navbar-links">
        <Link to = "/" className='p__opensans'>Home</Link>
        <Link to = "/about" className='p__opensans' style={{paddingLeft : "30px"}}>About Us</Link>
        <Link to = "/menu" className='p__opensans' style={{paddingLeft : "30px"}}>Menu</Link>
        <Link to = "/contact" className='p__opensans' style={{paddingLeft : "30px"}}>Contact Us</Link>
    </div>
      {/* <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Registration</a>
        <div />
        <a href="/" className="p__opensans">Log In </a>
      </div> */}

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineCake fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
  </nav>
  )
};

export default Navbar;
