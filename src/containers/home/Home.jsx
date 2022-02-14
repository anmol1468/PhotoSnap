import React from 'react';
import Banner from '../../components/banner/Banner';
import Pic1 from "../../assets/home/desktop/beautiful-stories.jpg";
import Pic2 from "../../assets/home/desktop/create-and-share.jpg";
import Pic3 from "../../assets/home/desktop/designed-for-everyone.jpg";
import { stories, features } from '../../data';
import Story from '../../components/story/Story';
import Feature from '../../components/feature/Feature';

const Home = () => {
  return <div className='home'>
    <div className="home__banners">
    <Banner title="BEAUTIFUL STORIES EVERY TIME" description="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone." btnAction="VIEW THE STORIES" photo={Pic2} dark />
    <Banner title="Create and share your photo stories. " description="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others." btnAction="GET AN INVITE" photo={Pic1} flip />
    <Banner title="DESIGNED FOR EVERYONE" description="Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. " btnAction="VIEW THE STORIES" photo={Pic3} />
    </div>
    <div className="home__stories">
      <Story title={stories[0].title} date={stories[0].date} author={stories[0].author} img={stories[0].img} ></Story>
      <Story title={stories[1].title} date={stories[1].date} author={stories[1].author} img={stories[1].img} ></Story>
      <Story title={stories[2].title} date={stories[2].date} author={stories[2].author} img={stories[2].img} ></Story>
      <Story title={stories[3].title} date={stories[3].date} author={stories[3].author} img={stories[3].img} ></Story>
    </div>

    <div className="home__features">
      <Feature title={features[0].title} description={features[0].description} logo={features[0].logo} />
      <Feature title={features[1].title} description={features[1].description} logo={features[1].logo} />
      <Feature title={features[3].title} description={features[3].description} logo={features[3].logo} />
    </div>
  </div>;
};

export default Home;
