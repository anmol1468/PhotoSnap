import React from 'react';
import { CgArrowLongRight } from 'react-icons/cg';
import '../../index.scss'

const Button = (props) => {

  return <div className='button-box' style={{width: props.wide ? "100%" : "16rem"}}>
  <button className='button' style={{color: props.dark? '#fff': '#000'}} >
    {props.children}
  </button>
    <CgArrowLongRight />
    </div>
};

export default Button;
