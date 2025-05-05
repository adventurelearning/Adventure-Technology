import React from 'react';

// Importing the Ecommerce related components
import EcommerceHome from './IndustryServ/Ecommerce/EcommerceHome';
import EcommerceImg from './IndustryServ/Ecommerce/EcommerceImg';
import EcommerceServ from './IndustryServ/Ecommerce/EcommerceServ';
import EcommerceCount from './IndustryServ/Ecommerce/EcommerceCount';
import EcommerceSection from './IndustryServ/Ecommerce/EcommerceSection';
import EcommerceFeatures from './IndustryServ/Ecommerce/EcommerceFeatures';
import EcommerceProcess from './IndustryServ/Ecommerce/EcommerceProcess';
import EcommerceFAQ from './IndustryServ/Ecommerce/EcommerceFAQ';
import WhyEcommerce from './IndustryServ/Ecommerce/WhyEcommerce';
import Locations from './Locations';
import ConsultationForm from './ConsultationForm';

function Ecommerce() {
    return (
        <div>
            <EcommerceHome />
            <EcommerceImg />
            <EcommerceServ />
            <EcommerceSection />
            <EcommerceCount />
            <EcommerceFeatures />
            <EcommerceProcess />
            <WhyEcommerce />
            <EcommerceFAQ />
            <ConsultationForm/>  
            <Locations/>
        </div>
    );
}

export default Ecommerce;
