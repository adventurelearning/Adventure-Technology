import React from 'react'
import AboutHome from './AboutHome'
import AboutSection from './AboutSection'
import AboutMission from './AboutMission'
import AboutCount from './AboutCount'
import AboutConnect from './AboutConnect'
import Timeline from './Timeline'
import CoreValues from './CoreValues'
import Locations from './Locations'
import AboutStory from './AboutStory'
import CulturePage from './CulturePage'
import CultureBanner from './CultureBanner'

const Aboutus = () => {
  return (
    <div>
      <AboutHome />
      <AboutSection />
      <AboutStory />
      <AboutCount />
      <CultureBanner />
      <CoreValues />
      <CulturePage />
      {/* <AboutMission/>   */}
      <Timeline />
      <AboutConnect />
      <Locations />

    </div>
  )
}

export default Aboutus
