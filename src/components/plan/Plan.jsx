import React from 'react';
import "../../index.scss"

const Plan = ({name, description, price, dark, main, term}) => {
  return <> 
  <div className='plan' style={{
    backgroundColor: dark? '#000' : '#F5F5F5',
    color: !dark? '#000' : '#fff',
    transform: main? "scaleY(1.08)": "scale(1)"
    }}>
      <div>
    <h3 className="plan__name">{name}</h3>
    <p className="plan__description" >{description}</p>
    <h2 className='plan__price'>{`$${price}`} <span>{`per ${term==="Monthly"? "month": 'year'}`}</span></h2>
    <button style={{
      backgroundColor: !dark? '#000': '#fff',
      color: dark? '#000': '#fff'
    }} >PICK PLAN</button>
    </div>
    <div><h2 className='plan__price outside'>{`$${price}`} <span>per month</span></h2></div>
  </div>
  
  
  </>
};

export default Plan;
