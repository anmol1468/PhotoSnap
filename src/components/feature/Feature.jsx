import React from 'react';
import '../../index.scss';

const Feature = ({logo, title, description}) => {
  return <div className='feature'>
    <div className='feature__feature'><img src={logo} alt="logo" /></div>
    <h3 className="feature__title">{title}</h3>
    <p className="feature__description">{description}</p>
  </div>;
};

export default Feature;
