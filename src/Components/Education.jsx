import React from 'react';
import EducationHome from './IndustryServ/Education/EducationHome';
import EducationImg from './IndustryServ/Education/EducationImg';
import EducationServ from './IndustryServ/Education/EducationServ';
import EducationCount from './IndustryServ/Education/EducationCount';
import ELearningSection from './IndustryServ/Education/ELearningSection';
import EduFeatures from './IndustryServ/Education/EduFeatures'
import EducationProcess from './IndustryServ/Education/EducationProcess';
import EducationFAQ from './IndustryServ/Education/EducationFAQ';
import WhyEduApp from './IndustryServ/Education/WhyEduApp';
import Locations from './Locations';
import ConsultationForm from './ConsultationForm';

const Education = () => {
    return (
        <>
            <EducationHome />
            <EducationImg />
            <EducationServ />
            <ELearningSection />
            <EducationCount />
            <EduFeatures />
            <EducationProcess />
            <WhyEduApp />
            <EducationFAQ />
            <ConsultationForm/>  
            <Locations/>
        </>
    );
};

export default Education;