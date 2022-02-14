import React from 'react';
import "../../index.scss"

const Slider = (props) => {

  function changeTerm (term) {
    if (props.term==="Monthly") props.setTerm('Yearly')
    if (props.term==="Yearly") props.setTerm('Monthly')
  }

  return <div className="sliderBox">
  <p style={{opacity: props.term==="Monthly"? "1" :"0.5"}}>Monthly</p>
  <label className="switch" onChange={changeTerm}>
  <input className='input' type="checkbox" />
  <span className="slider round"></span>
</label>
<p style={{opacity: props.term!=="Monthly"? "1" :"0.5"}}>Yearly</p>
  </div>;
};

export default Slider;
