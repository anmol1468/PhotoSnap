import React from 'react';
import '../../index.scss'
import pic from '../../assets/features/desktop/hero.jpg'
import Banner from '../../components/banner/Banner';
import { features } from '../../data.js';
import Feature from '../../components/feature/Feature';
import Beta from '../../components/beta/Beta';

const Features = () => {
  return <div className='features'>
    <Banner title='FEATURES' description='We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.' photo={pic} dark />
    <div className="features__box">
    {features.map((feature) => {
      return <Feature logo={feature.logo} title={feature.title} description={feature.description} />
    })}
    </div>
    <Beta />
  </div>;
};

export default Features;
