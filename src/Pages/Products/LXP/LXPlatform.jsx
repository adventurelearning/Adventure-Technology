import React from 'react'
import LxpHome from '../../../Components/ProductLXP/LXPHome'
import KeyFeatures from '../../../Components/ProductLXP/KeyFeatures'
import LxpSupport from '../../../Components/ProductLXP/LxpSupport'
import LxpFAQ from '../../../Components/ProductLXP/LxpFAQ'
import LxpSupportIndustries from '../../../Components/ProductLXP/LxpSupportIndustries'
import LxpFocus from '../../../Components/ProductLXP/LxpFocus'
import WhyChooselxp from '../../../Components/ProductLXP/WhyChooselxp'

const LXPlatform = () => {
  return (
    <div>
      <LxpHome/>
      <WhyChooselxp/>
      <LxpFocus/>
      <KeyFeatures/>
      <LxpSupportIndustries/>
      <LxpSupport/>
      <LxpFAQ/>
    </div>
  )
}

export default LXPlatform
