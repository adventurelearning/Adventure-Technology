import React from 'react'
import EmbHome from '../../../Components/EmbSoftServ/EmbHome'
import EmbOffer from '../../../Components/EmbSoftServ/EmbOffer'
import EmbTools from '../../../Components/EmbSoftServ/EmbTools'
import EmbDevelopmentProcess from '../../../Components/EmbSoftServ/EmbDevelopmentProcess'
import EmbFAQ from '../../../Components/EmbSoftServ/EmbFAQ'
import WhyEmb from '../../../Components/EmbSoftServ/WhyEmb'

const EmbSoft= () => {
  return (
    <div>
      <EmbHome/>
      <EmbOffer/>
      {/* <WhyEmb/>  */}
      <EmbTools/>
      <EmbDevelopmentProcess/>
      <EmbFAQ/>
    </div>
  )
}

export default EmbSoft;
