import React from 'react'
import AiHome from '../../../Components/AiServ/AiHome'
import AiOffer from '../../../Components/AiServ/AiOffer'
import WhyWeb from '../../../Components/webServ/WhyWeb'
import AiTools from '../../../Components/AiServ/AiTools'
import AiDevelopmentProcess from '../../../Components/AiServ/AiDevelopmentProcess'
import AiFAQ from '../../../Components/AiServ/AiFAQ'
const AiMl = () => {
  return (
    <div>
      <AiHome/>
      <AiOffer/>
      <WhyWeb/> 
      <AiTools/>
      <AiDevelopmentProcess/>
      <AiFAQ/>
    </div>
  )
}

export default AiMl
