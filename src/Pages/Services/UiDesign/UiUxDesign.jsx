import React from 'react'
import UiHome from '../../../Components/UiServ/UiHome'
import UiOffer from '../../../Components/UiServ/UiOffer'
import WhyWeb from '../../../Components/webServ/WhyWeb'
import UiTools from '../../../Components/UiServ/UiTools'
import UiDevelopmentProcess from '../../../Components/UiServ/UiDevelopmentProcess'
import UiFAQ from '../../../Components/UiServ/UiFAQ'
const UiUxDesign = () => {
  return (
    <div>      
      <UiHome/>
      <UiOffer/>
      {/* <WhyWeb/>  */}
      <UiTools/>
      <UiDevelopmentProcess/>
      <UiFAQ/>      
    </div>
  )
}

export default UiUxDesign
