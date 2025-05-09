import React from 'react';
import SaaSHome from './IndustryServ/SaaS/SaaSHome';
import SaaSImg from './IndustryServ/SaaS/SaaSImg';
import SaaSServ from './IndustryServ/SaaS/SaaSServ';
import SaaSCount from './IndustryServ/SaaS/SaaSCount';
import SaaSSection from './IndustryServ/SaaS/SaaSSection';
import SaaSFeatures from './IndustryServ/SaaS/SaaSFeatures';
import SaaSProcess from './IndustryServ/SaaS/SaaSProcess';
import SaaSFAQ from './IndustryServ/SaaS/SaaSFAQ';
import WhySaaS from './IndustryServ/SaaS/WhySaaS';
import Locations from './Locations';
import ConsultationForm from './ConsultationForm';

const SaaS = () => {
    return (
        <div>
            <SaaSHome />
            <SaaSImg />
            <SaaSServ />
            <SaaSSection />
            <SaaSCount />
            {/* <SaaSFeatures /> */}
            <SaaSProcess />
            <WhySaaS />
            <SaaSFAQ />
            <ConsultationForm/>  
            <Locations/>
        </div>
    )
}

export default SaaS;
