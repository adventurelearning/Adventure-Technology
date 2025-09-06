import React from 'react'
import CrmHome from '../../../Components/ProductCRM/CrmHome'
import WhyChooseCRM from '../../../Components/ProductCRM/WhyChooseCRM'
import CRMFocus from '../../../Components/ProductCRM/CRMFocus'
import KeyFeatures from '../../../Components/ProductCRM/KeyFeatures'
import CRMSupportIndustry from '../../../Components/ProductCRM/CRMSupportIndustry'
import CRMSupport from '../../../Components/ProductCRM/CRMSupport'
import CrmFAQ from '../../../Components/ProductCRM/CrmFAQ.JSX'


const CRManagement = () => {
    return (
        <div>
            <CrmHome />
            <WhyChooseCRM />
            <CRMFocus />
            <KeyFeatures />
            <CRMSupportIndustry/>
            <CRMSupport/>
            <CrmFAQ/>
        </div>
    )
}

export default CRManagement
