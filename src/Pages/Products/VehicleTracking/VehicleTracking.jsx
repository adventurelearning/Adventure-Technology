import React from 'react'
import VehicleTrackingHome from '../../../Components/ProductVehicleTracking/VehicleTrackingHome'
import WhyChooseVehicleTracking from '../../../Components/ProductVehicleTracking/WhyChooseVehicleTracking'
import VehicleTrackingFocus from '../../../Components/ProductVehicleTracking/VehicleTrackingFocus'
import KeyFeatures from '../../../Components/ProductVehicleTracking/KeyFeatures'
import VehicleTrackingIndustries from '../../../Components/ProductVehicleTracking/VehicleTrackingIndustries'
import VehicleTrackingSupport from '../../../Components/ProductVehicleTracking/VehicleTrackingSupport'
import VehicleTrackingFAQ from '../../../Components/ProductVehicleTracking/VehicleTrackingFAQ'

const VehicleTracking = () => {
  return (
    <div>
      <VehicleTrackingHome/>
      <WhyChooseVehicleTracking/>
      <VehicleTrackingFocus/>
      <KeyFeatures/>
      <VehicleTrackingIndustries/>
      <VehicleTrackingSupport/>
      <VehicleTrackingFAQ/>

    </div>
  )
}

export default VehicleTracking
