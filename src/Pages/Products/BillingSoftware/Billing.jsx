import React from 'react'
import BillHome from '../../../Components/ProductBilling/BillHome'
import WhychooseBill from '../../../Components/ProductBilling/WhychooseBill'
import KeyFeatures from '../../../Components/ProductBilling/KeyFeatures'
import BillFocus from '../../../Components/ProductBilling/BillFocus'
import BillSupportIndutry from '../../../Components/ProductBilling/BillSupportIndutry'
import BillSupport from '../../../Components/ProductBilling/BillSupport'
import BillingFAQ from '../../../Components/ProductBilling/BillingFAQ'
import BillContent from '../../../Components/ProductBilling/BillContent'

const Billing = () => {
  return (
    <div>
        <BillHome/>
        <WhychooseBill/>
        <BillFocus/>
        <KeyFeatures/>
        <BillContent/>
        <BillSupportIndutry/>
        <BillSupport/>
        <BillingFAQ/>
      
    </div>
  )
}

export default Billing
