import React from 'react'
import WebHome from '../../../Components/webServ/WebHome'
import WebOffer from '../../../Components/webServ/WebOffer'
import WebDevelopmentProcess from '../../../Components/webServ/WebDevelopmentProcess'
import WebTools from '../../../Components/webServ/WebTools'
import WhyWeb from '../../../Components/webServ/WhyWeb'
import WebFAQ from '../../../Components/webServ/WebFAQ'

const WebDevelopment = () => {
  return (
    <div>
      <WebHome/>
      <WebOffer/>
      {/* <WhyWeb/>       */}
      <WebTools/>
      <WebDevelopmentProcess/>
      <WebFAQ/>
    </div>
  )
}

export default WebDevelopment
