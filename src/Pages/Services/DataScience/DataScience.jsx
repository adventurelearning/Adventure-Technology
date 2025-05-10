import React from 'react'
import WebHome from '../../../Components/webServ/WebHome'
import WebOffer from '../../../Components/webServ/WebOffer'
import WebDevelopmentProcess from '../../../Components/webServ/WebDevelopmentProcess'
import WebTools from '../../../Components/webServ/WebTools'
import WhyWeb from '../../../Components/webServ/WhyWeb'
import WebFAQ from '../../../Components/webServ/WebFAQ'
import DataHome from '../../../Components/DataServ/DataHome'
import DataOffer from '../../../Components/DataServ/DataOffer'
import WhyData from '../../../Components/DataServ/WhyData'
import DataTools from '../../../Components/DataServ/DataTools'
import DataDevelopmentProcess from '../../../Components/DataServ/DataDevelopmentProcess'
import DataFAQ from '../../../Components/DataServ/DataFAQ'
const DataScience = () => {
  return (
    <div>
      <DataHome/>
      <DataOffer/>
      <WhyWeb/> 
      <DataTools/>
      <DataDevelopmentProcess/>
      <DataFAQ/>
    </div>
  )
}

export default DataScience
