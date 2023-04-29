import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import image from '../../constants/image';

import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    {/* <FooterOverlay />
    <Newsletter /> */}

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Hargeisa, Somaliland</p>
        <p className="p__opensans">+252 63-444-12300</p>
        <p className="p__opensans">+252 63-355-12300</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={image.logg} alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <a href='https://www.facebook.com/'><FiFacebook /></a>
          <a href='https://twitter.com'><FiTwitter /></a>
          <a href='https://www.instagram.com/'><FiInstagram /></a>
          
          
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Saturday-wednesday:</p>
        <p className="p__opensans">08:00 am - 11:00 pm</p>
        <p className="p__opensans">thrusday-friday:</p>
        <p className="p__opensans">04:00 pm - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 me.bakes. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
