import React from 'react';
import AgricultureHome from './IndustryServ/Agriculture/AgricultureHome';
import AgricultureImg from './IndustryServ/Agriculture/AgricultureImg';
import AgricultureServ from './IndustryServ/Agriculture/AgricultureServ';
import AgricultureCount from './IndustryServ/Agriculture/AgricultureCount';
import AgricultureSection from './IndustryServ/Agriculture/AgricultureSection';
import AgricultureFeatures from './IndustryServ/Agriculture/AgricultureFeatures';
import AgricultureProcess from './IndustryServ/Agriculture/AgricultureProcess';
import AgricultureFAQ from './IndustryServ/Agriculture/AgricultureFAQ';
import WhyAgriculture from './IndustryServ/Agriculture/WhyAgriculture';
import Locations from './Locations';
import ConsultationForm from './ConsultationForm';

const Agriculture = () => {
  return (
    <div>
      <AgricultureHome />
      <AgricultureImg />
      <AgricultureServ />
      <AgricultureSection />
      <AgricultureCount />
      <AgricultureFeatures />
      <AgricultureProcess />
      <WhyAgriculture />
      <AgricultureFAQ />
      <ConsultationForm/>  
      <Locations/>
    </div>
  )
}

export default Agriculture;
