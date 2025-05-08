import React from 'react'
import AboutHome from './AboutHome'
import AboutSection from './AboutSection'
import AboutMission from './AboutMission'
import AboutCount from './AboutCount'
import AboutConnect from './AboutConnect'
import Timeline from './Timeline'
import CoreValues from './CoreValues'
import Locations from './Locations'

const Aboutus = () => {
  return (
    <div>
      <AboutHome/>
      <AboutSection/>
      <AboutCount/>
      {/* <AboutMission/>   */}
      <Timeline/>
      <CoreValues/>        
      <AboutConnect/>
       <Locations/>
      
    </div>
  )
}

export default Aboutus
