import React from 'react'
import HomeVdo from '../../Components/HomeVdo'
import Provides from '../../Components/Provides'
import Achivements from '../../Components/Achivements'
import WhyAdventure from '../../Components/WhyAdventure'
import Tools from '../../Components/Tools'
import Faq from '../../Components/Faq'
import ConsultationForm from '../../Components/ConsultationForm'
import TeamWork from '../../Components/TeamWork'
import Locations from '../../Components/Locations'

const Home = () => {
  return (
    <div>
        <HomeVdo/> 
        <Achivements/>
        <Provides/>  
        <WhyAdventure/> 
        <Tools/>     
        <TeamWork/>
        <ConsultationForm/>  
        <Faq/>       
        <Locations/>
    </div>
  )
}

export default Home
