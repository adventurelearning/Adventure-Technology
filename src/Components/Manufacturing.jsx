import React from 'react';
import ManufacturingHome from './IndustryServ/Manufacturing/ManufacturingHome';
import ManufacturingImg from './IndustryServ/Manufacturing/ManufacturingImg';
import ManufacturingServ from './IndustryServ/Manufacturing/ManufacturingServ';
import ManufacturingCount from './IndustryServ/Manufacturing/ManufacturingCount';
import ManufacturingSection from './IndustryServ/Manufacturing/ManufacturingSection';
import ManufacturingFeatures from './IndustryServ/Manufacturing/ManufacturingFeatures';
import ManufacturingProcess from './IndustryServ/Manufacturing/ManufacturingProcess';
import ManufacturingFAQ from './IndustryServ/Manufacturing/ManufacturingFAQ';
import WhyManufacturing from './IndustryServ/Manufacturing/WhyManufacturing';
import Locations from './Locations';
import ConsultationForm from './ConsultationForm';
const Manufacturing = () => {
    return (
        <div>
            <ManufacturingHome />
            <ManufacturingImg />
            <ManufacturingServ />
            <ManufacturingSection />
            <ManufacturingCount />
            <ManufacturingFeatures />
            <ManufacturingProcess />
            <WhyManufacturing />
            <ManufacturingFAQ />
            <ConsultationForm/>  
            <Locations/>
        </div>
    )
}

export default Manufacturing;
