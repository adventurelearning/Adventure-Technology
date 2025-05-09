import React from 'react'
import SoftHome from '../../../Components/SoftServ/SoftHome'
import SoftOffer from '../../../Components/SoftServ/SoftOffer'
import SoftDevelopmentProcess from '../../../Components/SoftServ/SoftDevelopmentProcess'
import SoftTools from '../../../Components/SoftServ/SoftTools'
import SoftFAQ from '../../../Components/SoftServ/SoftFAQ'
import WhyWeb from '../../../Components/webServ/WhyWeb'

const SoftwareDevelopment = () => {
  return (
    <div>
      <SoftHome />
      <SoftOffer />
      {/* <WhyWeb/>  */}
      <SoftTools />
      <SoftDevelopmentProcess />
      <SoftFAQ />

    </div>
  )
}

export default SoftwareDevelopment
