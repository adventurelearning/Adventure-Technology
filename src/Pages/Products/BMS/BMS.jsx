import React from 'react'
import BMSHome from '../../../Components/ProductBMS/BMSHome'
import WhychooseBMS from '../../../Components/ProductBMS/WhychooseBMS'
import BMSFocus from '../../../Components/ProductBMS/BMSFocus'
import BMSSupportIndutry from '../../../Components/ProductBMS/BMSSupportIndutry'
import BMSSupport from '../../../Components/ProductBMS/BMSSupport'
import BMSFAQ from '../../../Components/ProductBMS/BMSFAQ'
import KeyFeatures from '../../../Components/ProductBMS/KeyFeatures'

const BMS = () => {
  return (
    <div>
      <BMSHome/>
      <WhychooseBMS/>
      <BMSFocus/>
      <KeyFeatures/>
      <BMSSupportIndutry/>
      <BMSSupport/>
      <BMSFAQ/>
    </div>
  )
}

export default BMS
