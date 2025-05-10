import React from 'react'
import MarkHome from '../../../Components/MarketServ/MarkHome'
import MarkOffer from '../../../Components/MarketServ/MarkOffer'
import MarkTools from '../../../Components/MarketServ/MarkTools'
import MarkDevelopmentProcess from '../../../Components/MarketServ/MarkDevelopmentProcess'
import MarkFAQ from '../../../Components/MarketServ/MarkFAQ'
import WhyWeb from '../../../Components/webServ/WhyWeb'
import WhyMark from '../../../Components/MarketServ/WhyMark'
const DigitalMarket = () => {
  return (
    <div>
      <MarkHome/>
      <MarkOffer/>
      <WhyMark/>
      <MarkTools/>
      <MarkDevelopmentProcess/>
      <MarkFAQ/>
    </div>
  )
}

export default DigitalMarket
