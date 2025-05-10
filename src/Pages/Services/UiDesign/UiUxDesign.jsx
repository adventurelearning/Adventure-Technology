import React from 'react'
import UiHome from '../../../Components/UiServ/UiHome'
import UiOffer from '../../../Components/UiServ/UiOffer'
import UiTools from '../../../Components/UiServ/UiTools'
import UiDevelopmentProcess from '../../../Components/UiServ/UiDevelopmentProcess'
import UiFAQ from '../../../Components/UiServ/UiFAQ'
import WhyUi from '../../../Components/UiServ/WhyUi'
const UiUxDesign = () => {
  return (
    <div>      
      <UiHome/>
      <UiOffer/> 
      <WhyUi/>
      <UiTools/>
      <UiDevelopmentProcess/>
      <UiFAQ/>      
    </div>
  )
}

export default UiUxDesign
