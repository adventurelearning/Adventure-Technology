import React from 'react'
import LxpHome from '../../../Components/ProductLXP/LXPHome'
import WhyChooseLxp from '../../../Components/ProductLXP/WhyChooseLxp.JSX'
import LxpFocus from '../../../Components/ProductLXP/LxpFocus .JSX'
import KeyFeatures from '../../../Components/ProductLXP/KeyFeatures'
import LxpSupport from '../../../Components/ProductLXP/LxpSupport'
import LxpFAQ from '../../../Components/ProductLXP/LxpFAQ'
import LxpSupportIndustries from '../../../Components/ProductLXP/LxpSupportIndustries'

const LXPlatform = () => {
  return (
    <div>
      <LxpHome/>
      <WhyChooseLxp/>
      <LxpFocus/>
      <KeyFeatures/>
      <LxpSupportIndustries/>
      <LxpSupport/>
      <LxpFAQ/>
    </div>
  )
}

export default LXPlatform
