import React from 'react'
import InternfAQ from './InternFAQ'
import InternHome from './InternHome'
import InternCount from './InternCount'
import WhyIntern from './WhyIntern'
import DomainsSection from './DomainSection'

const Internship = () => {
    return (
        <div>
            <InternHome />
            <DomainsSection/>
            <WhyIntern/>
            <InternCount/>       
            <InternfAQ />
            
        </div>
    )
}

export default Internship
