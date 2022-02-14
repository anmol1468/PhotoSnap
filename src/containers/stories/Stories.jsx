import React from 'react';
import Header from '../../components/header/Header';
import Story from '../../components/story/Story';
import { stories } from '../../data';

const Stories = () => {
  return <div className='stories'>
    <Header title='HAZY FULL MOON OF APPALACHIA' date='March 2nd 2020' author='John Appleseed' description='The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.' />
    <div className="stories__container">
    {stories.map((story, index) => {
      return <Story title={story.title} date={story.date} author={story.author} img={story.img} key={index} />
    })}
    </div>
  </div>;
};

export default Stories;
