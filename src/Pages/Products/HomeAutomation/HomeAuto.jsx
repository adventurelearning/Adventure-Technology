import React from 'react'
import HomeAutomationHome from '../../../Components/ProductHomeAutomation/HomeAutomationHome'
import HomeAutomationFocus from '../../../Components/ProductHomeAutomation/HomeAutomationFocus'
import HomeAutomationSupport from '../../../Components/ProductHomeAutomation/HomeAutomationSupport'
import HomeAutomationIndustries from '../../../Components/ProductHomeAutomation/HomeAutomationIndustries'
import HomeAutomationFAQ from '../../../Components/ProductHomeAutomation/HomeAutomationFAQ'
import KeyFeatures from '../../../Components/ProductHomeAutomation/KeyFeatures'
import WhyChooseHomeAutomation from '../../../Components/ProductHomeAutomation/WhyChooseHomeAutomation'

const HomeAuto = () => {
    return (
        <div>
            <HomeAutomationHome />
            <WhyChooseHomeAutomation />
            <HomeAutomationFocus />
            <KeyFeatures />
            <HomeAutomationIndustries />
            <HomeAutomationSupport />
            <HomeAutomationFAQ />


        </div>
    )
}

export default HomeAuto
