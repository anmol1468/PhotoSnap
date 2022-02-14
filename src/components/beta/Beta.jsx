import React from 'react';
import '../../index.scss';
import Button from '../button/Button';

const Beta = () => {
  return <div className='beta-wrap'>
    <div class='beta' >
      <h2 className='beta__text'><span>WE'RE IN BETA.</span><span>GET YOUR INVITE</span><span>TODAY!</span></h2>
    <Button dark>GET AN INVITE</Button>
    </div>
    
  </div>
};

export default Beta;
