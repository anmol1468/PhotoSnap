import React, {useState} from 'react';
import pic from '../../assets/pricing/desktop/hero.jpg'
import AddOn from '../../components/addOn/AddOn';
import Banner from '../../components/banner/Banner';
import Beta from '../../components/beta/Beta';
import Plan from '../../components/plan/Plan';
import Slider from '../../components/slider/Slider';

const plans = {
  basic: {priceMonthly: '19.00', priceYearly: '190.00'},
  pro: {priceMonthly: '39.00', priceYearly: '390.00'},
  business: {priceMonthly: '99.00', priceYearly: '990.00'},
}

const Pricing = () => {

  const [term, setTerm] = useState("Monthly")

  return <div className='pricing'>
    <Banner title='PRICING' description='Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.' photo={pic} dark />
    <Slider term={term} setTerm={setTerm} />
    <div className="pricing__planBox">
      <Plan name="Basic" description="Includes basic usage of our platform. Recommended for new and aspiring photographers." price={term==="Monthly" ? plans.basic.priceMonthly: plans.basic.priceYearly} term={term} />
      <Plan name="Pro" description="More advanced features available. Recommended for photography veterans and professionals." price={term==="Monthly" ? plans.pro.priceMonthly: plans.pro.priceYearly} term={term} dark main />
      <Plan name="Business" description="Additional features available such as more detailed metrics. Recommended for business owners." price={term==="Monthly" ? plans.business.priceMonthly: plans.business.priceYearly} term={term} />
    </div>
    <div className="pricing__compare">
      <h2>COMPARE</h2>
      <AddOn heading/>
      <AddOn title='UNLIMITED STORY POSTING' basic pro business />
      <AddOn title='UNLIMITED PHOTO UPLOAD' basic pro business />
      <AddOn title='EMBEDDING CUSTOM CONTENT' pro business />
      <AddOn title='CUSTOMIZE METADATA' pro business />
      <AddOn title='ADVANCED METRICS' business />
      <AddOn title='PHOTO DOWNLOADS' business />
      <AddOn title='SEARCH ENGINE INDEXING' business />
      <AddOn title='CUSTOM ANALYTICS' business />
    </div>
    <Beta />
  </div>
};

export default Pricing;
