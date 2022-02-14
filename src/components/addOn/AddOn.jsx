import React from 'react';
import "../../index.scss";
import Tick from '../../assets/pricing/desktop/check.svg'

const AddOn = ({title, basic, pro, business, heading}) => {
  return <div className={`addOn ${heading? "heading" : ""}`} >
    <h3 className="addOn__title">{heading? "THE FEATURES" : title}</h3>
    <div className="addOn__access">
      {!heading && <p>BASIC</p>}
      {basic && <img src={Tick} alt="feature-availability" /> }
    <span>{`${heading? "BASIC" : ""}`}</span></div>
    {/* <div className="addOn__access">{basic && <img src={Tick} alt="feature-availability" /> }</div> */}
    <div className="addOn__access">
      {!heading && <p>PRO</p>}
      {pro && <img src={Tick} alt="feature-availability" /> }
    <span>{`${heading? "PRO" : ""}`}</span></div>
    <div className="addOn__access">
      {!heading && <p>BUSINESS</p>}
      {business && <img src={Tick} alt="feature-availability" /> }
    <span>{`${heading? "BUSINESS" : ""}`}</span></div>
  </div>;
};

export default AddOn;
