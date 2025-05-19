import React from 'react'
import InternfAQ from './InternFAQ'
import InternHome from './InternHome'
import InternCount from './InternCount'
import WhyIntern from './WhyIntern'
import DomainsSection from './DomainSection'
import InternCertificate from './InternCertificate'
import InternReviews from './InternReviews'
import InterForm from './InterForm'
import Locations from './Locations'

const Internship = () => {
    return (
        <div>
            <InternHome />
            <DomainsSection />
            <WhyIntern />
            <InternCount />
            <InterForm />
            <InternCertificate />
            <InternReviews />
            <InternfAQ />
            <Locations />

        </div>
    )
}

export default Internship
