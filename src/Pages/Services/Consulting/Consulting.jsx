import React from 'react'
import ConsultHome from '../../../Components/ConsultServ/ConsultHome'
import ConsultOffer from '../../../Components/ConsultServ/ConsultOffer'
import WhyConsult from '../../../Components/ConsultServ/WhyConsult'
import ConsultTools from '../../../Components/ConsultServ/ConsultTools'
import ConsultDevelopmentProcess from '../../../Components/ConsultServ/ConsultDevelopmentProcess'
import ConsultFAQ from '../../../Components/ConsultServ/ConsultFAQ'
const Consulting = () => {
  return (
    <div>
      <ConsultHome/>
      <ConsultOffer/>
      <WhyConsult/>
      <ConsultTools/>
      <ConsultDevelopmentProcess/>
      <ConsultFAQ/>
    </div>
  )
}

export default Consulting;
