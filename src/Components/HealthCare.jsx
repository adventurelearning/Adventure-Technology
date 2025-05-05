import React from 'react';
import HealthCareHome from './IndustryServ/HealthCare/HealthCareHome';
import HealthCareImg from './IndustryServ/HealthCare/HealthCareImg';
import HealthCareServ from './IndustryServ/HealthCare/HealthCareServ';
import HealthCareCount from './IndustryServ/HealthCare/HealthCareCount';
import HealthCareSection from './IndustryServ/HealthCare/HealthCareSection';
import HealthCareFeatures from './IndustryServ/HealthCare/HealthCareFeatures'
import HealthCareProcess from './IndustryServ/HealthCare/HealthCareProcess';
import HealthCareFAQ from './IndustryServ/HealthCare/HealthCareFAQ';
import WhyHealthCare from './IndustryServ/HealthCare/WhyHealthCare';
import Locations from './Locations';
import ConsultationForm from './ConsultationForm';


const HealthCare = () => {
    return (
        <>
            <HealthCareHome />
            <HealthCareImg />
            <HealthCareServ  />
            <HealthCareSection />
            <HealthCareCount />
            <HealthCareFeatures />
            <HealthCareProcess />
            <WhyHealthCare />
            <HealthCareFAQ />
            <ConsultationForm/>  
            <Locations/>

            
        </>
    );
};

export default HealthCare;
