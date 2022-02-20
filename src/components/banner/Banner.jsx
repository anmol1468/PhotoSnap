import React from 'react';
import "../../index.scss";
import Button from '../button/Button';

const Banner = ({title, description, btnAction, photo, flip, dark}) => {
  return (
    <div className={`banner`} style={{flexDirection:flip? "row-reverse": "row"}}>
      <div className="banner__text" style={{backgroundColor: dark? '#000': '#fff',color:dark ? '#fff': '#000'}}>
        <h1>{title}</h1>
        <p>{description}</p>
        {btnAction && <Button dark={dark? true: undefined} >READ THE STORY</Button>}
      </div>
      <div className="banner__pic" style={{backgroundImage: `url(${photo})`}}>
        {/* <img src={photo} alt="illustration" />  */}
      </div>
    </div>
  )
}

export default Banner
