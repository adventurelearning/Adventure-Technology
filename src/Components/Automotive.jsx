import React from 'react';
import AutomotiveHome from './IndustryServ/Automotive/AutomotiveHome';
import AutomotiveImg from './IndustryServ/Automotive/AutomotiveImg';
import AutomotiveServ from './IndustryServ/Automotive/AutomotiveServ';
import AutomotiveCount from './IndustryServ/Automotive/AutomotiveCount';
import AutomotiveSection from './IndustryServ/Automotive/AutomotiveSection';
import AutomotiveFeatures from './IndustryServ/Automotive/AutomotiveFeatures'
import AutomotiveProcess from './IndustryServ/Automotive/AutomotiveProcess';
import AutomotiveFAQ from './IndustryServ/Automotive/AutomotiveFAQ';
import WhyAutomotive from './IndustryServ/Automotive/WhyAutomotive';
import Locations from './Locations';
import ConsultationForm from './ConsultationForm';

const Automotive = () => {
    return (
        <div>
            <AutomotiveHome />
            <AutomotiveImg/>
            <AutomotiveServ/>
            <AutomotiveSection />
            <AutomotiveCount />
            <AutomotiveFeatures />
            <AutomotiveProcess />
            <WhyAutomotive />
            <AutomotiveFAQ />
            <ConsultationForm/>  
            <Locations/>
            

        </div>
    )
}

export default Automotive
