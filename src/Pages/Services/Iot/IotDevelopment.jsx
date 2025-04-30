import React from 'react'
import IotHome from '../../../Components/IotServ/IotHome'
import IotOffer from '../../../Components/IotServ/IotOffer'
import WhyIot from '../../../Components/IotServ/WhyIot'
import IotTools from '../../../Components/IotServ/IotTools'
import IotDevelopmentProcess from '../../../Components/IotServ/IotDevelopmentProcess'
import IotFAQ from '../../../Components/IotServ/IotFAQ'
const IotDevelopment = () => {
  return (
    <div>      
      <IotHome/>
      <IotOffer/>
      <WhyIot/>
      <IotTools/>
      <IotDevelopmentProcess/>
      <IotFAQ/>
    </div>
  )
}

export default IotDevelopment
