import React from 'react';
import "../../index.scss";
import Button from '../button/Button';

const Story = ({date, title, author, img}) => {


// style={{background: `url(${img})`}}
  return <div className='story' >
    <div className="story__photo">
      <img src={img} alt="thumbnail" />
    </div>
    <div className="story__info">
      <p>{date}</p>
      <h3>{title}</h3>
      <p>{`by ${author}`}</p>
      <div className='line'></div>
      <Button dark wide >READ STORY</Button>
    </div>
  </div>;
};

export default Story;
