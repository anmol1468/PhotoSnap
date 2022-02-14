import React from 'react';
import Button from '../button/Button';

const Header = ({title, date, author, description}) => {
  return <div className='header'>
    <div className="header__content">
    <h4>LAST MONTH'S FEATURED STORY</h4>
    <h2>{title}</h2>
    <p>{date} <span>{`by ${author}`}</span></p>
    <p>{description}</p>
    <Button dark>READ THE STORY</ Button >
    </div>
  </div>
};

export default Header;
