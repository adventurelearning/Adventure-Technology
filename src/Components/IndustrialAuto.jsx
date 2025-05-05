import React from 'react';
import IndustrialHome from './IndustryServ/IndustrialAuto/IndustrialHome';
import IndustrialImg from './IndustryServ/IndustrialAuto/IndustrialImg';
import IndustriesServ from './IndustryServ/IndustrialAuto/IndustrialServ'
import IndustrialCount from './IndustryServ/IndustrialAuto/IndustrialCount';
import IndustrialSection from './IndustryServ/IndustrialAuto/IndustrialSection';
import IndustrialFeatures from './IndustryServ/IndustrialAuto/IndustrialFeatures'
import IndustrialProcess  from './IndustryServ/IndustrialAuto/IndustrialProcess';
import IndustrialFAQ from './IndustryServ/IndustrialAuto/IndustrialFAQ';
import WhyIndustrial from './IndustryServ/IndustrialAuto/WhyIndustrial';
import Locations from './Locations';
import ConsultationForm from './ConsultationForm';
const IndustrialAuto = () => {
    return (
        <div>
            <IndustrialHome />
            <IndustrialImg />
            <IndustriesServ/>
            <IndustrialSection />
            <IndustrialCount />
            <IndustrialFeatures />
            <IndustrialProcess />
            <WhyIndustrial />
            <IndustrialFAQ />
            <ConsultationForm/>  
            <Locations/>


        </div>
    )
}

export default IndustrialAuto;
