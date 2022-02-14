import React, { useState } from 'react';
import "../../index.scss"
import Logo from '../../assets/shared/desktop/logo.svg';
import { Link } from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';
import { ImCross } from 'react-icons/im'

const Navbar = () => {
  const [dropNav, setDropNav] = useState(false)

  function dropNavSwitch () {
    setDropNav(!dropNav)
  }

  const dropDownNav = <div className='navbar dropdown slide-bottom' style={{top: dropNav? "0": "-100%"}}>
    <div className="navbar__logobox"><Link to='/' className="navbar__logo"><img src={Logo} alt="logo" /> </Link><ImCross  onClick={dropNavSwitch}/></div>
      <ul className="navbar__links dropdown">
        <li><Link to="/stories">STORIES</Link></li>
        <li><Link to="/features">FEATURES</Link></li>
        <li><Link to="/pricing">PRICING</Link></li>
      </ul>
      <button className="navbar__button dropdown">GET AN INVITE</button>
    </div>

  return (
    <div className='navbar'>
      <Link to='/' className="navbar__logo"><img src={Logo} alt="logo" /></Link>      
      <ul className="navbar__links">
        <li><Link to="/stories">STORIES</Link></li>
        <li><Link to="/features">FEATURES</Link></li>
        <li><Link to="/pricing">PRICING</Link></li>
      </ul>
      <button className="navbar__button">GET AN INVITE</button>
      <div className="navbar__ham">
        <GiHamburgerMenu onClick={dropNavSwitch}/>
      </div>
      {dropNav? dropDownNav : null}
    </div>
  )
}

export default Navbar
