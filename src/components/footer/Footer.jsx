import React from 'react';
import Button from '../button/Button';
import Logo from '../../assets/shared/desktop/logo.svg';
import {Link} from 'react-router-dom';
import {AiFillFacebook, AiFillYoutube, AiFillTwitterCircle} from 'react-icons/ai';
import {BsPinterest, BsInstagram} from 'react-icons/bs';

const Footer = () => {
  return <footer>
    <div className="footer">
      <div className="footerR1">
        <div className="footerR1__logo">
          <h3>PHOTOSNAP</h3>
        </div>
        <div className="footerR1___socials">
        <AiFillFacebook id='fb' />
        <AiFillYoutube id='yt' />
        <AiFillTwitterCircle id='tw' />
        <BsPinterest id='pn' />
        <BsInstagram id='ig' />
        </div>
      </div>
      <div className="footerR2">
        <ul className="footerR2__links">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/stories">STORIES</Link></li>
        <li><Link to="/features">FEATURES</Link></li>
        <li><Link to="/pricing">PRICING</Link></li>
        </ul>
      </div>
      <div className="footerR3">
        <div className="footerR3__button">
          <Button dark>GET AN INVITE</Button>
        </div>
        <div className="footerR3__copyright">
          <p>Copyright 2020. All Rights Reserved</p>
        </div>
      </div>
    </div>
  </footer>
};

export default Footer;
