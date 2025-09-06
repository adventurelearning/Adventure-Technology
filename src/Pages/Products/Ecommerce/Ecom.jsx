import React from 'react'
import EcommerceHome from '../../../Components/ProductEcommerce/EcommerceHome';
import WhyChooseEcommerce from '../../../Components/ProductEcommerce/WhyChooseEcommerce';
import ECommerceFocus from '../../../Components/ProductEcommerce/ECommerceFocus';
import KeyFeatures from '../../../Components/ProductEcommerce/KeyFeatures';
import EcomSupportIndustries from '../../../Components/ProductEcommerce/EcomSupportIndustries';
import EcomSupport from '../../../Components/ProductEcommerce/EcomSupport';
import EcomFAQ from '../../../Components/ProductEcommerce/EcomFAQ';
import EcomContent from '../../../Components/ProductEcommerce/EcomContent';

const Ecom = () => {
  return (
    <div>
      <EcommerceHome/>
      <WhyChooseEcommerce/>
      <ECommerceFocus/>
      <KeyFeatures/>
      <EcomContent/>
      <EcomSupportIndustries path='/EcomSupportIndustries'/>
      <EcomSupport/>
      <EcomFAQ/>
    </div>
  )
}

export default Ecom;
