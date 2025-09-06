import React from 'react'
import AISystemHome from '../../../Components/ProductAISystem/AISystemHome'
import WhyChooseAIAttendance from '../../../Components/ProductAISystem/WhyChooseAISystem'
import AIAttendanceFocus from '../../../Components/ProductAISystem/AIAttendanceFocus'
import AIAttendanceIndustries from '../../../Components/ProductAISystem/AISystemIndustries'
import AIAttendanceSupport from '../../../Components/ProductAISystem/AIAttendanceSupport '
import KeyFeatures from '../../../Components/ProductAISystem/KeyFeatures'
import AIAttendanceFAQ from '../../../Components/ProductAISystem/AIAttendanceFAQ'

const AIAttendanceSystem = () => {
  return (
    <div>
      <AISystemHome/>
      <WhyChooseAIAttendance/>
      <AIAttendanceFocus/>
      <KeyFeatures/>
      <AIAttendanceIndustries/>
      <AIAttendanceSupport/>
      <AIAttendanceFAQ/>
      
    </div>
  )
}

export default AIAttendanceSystem
