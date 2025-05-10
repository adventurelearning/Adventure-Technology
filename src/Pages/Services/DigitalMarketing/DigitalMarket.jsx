import React from 'react'
import MarkHome from '../../../Components/MarketServ/MarkHome'
import MarkOffer from '../../../Components/MarketServ/MarkOffer'
import MarkTools from '../../../Components/MarketServ/MarkTools'
import MarkDevelopmentProcess from '../../../Components/MarketServ/MarkDevelopmentProcess'
import MarkFAQ from '../../../Components/MarketServ/MarkFAQ'
import WhyMark from '../../../Components/MarketServ/WhyMark'
// import WhyWeb from '../../../Components/webServ/WhyWeb'
import { Helmet } from 'react-helmet'

const DigitalMarket = () => {
  return (
    <>
    <Helmet>
  <title>Digital Marketing Services | Adventure Technology</title>
  <meta
    name="description"
    content="Adventure Technology offers data-driven digital marketing services designed to boost brand visibility, increase engagement, and drive measurable business growth."
  />
  <meta
    name="keywords"
    content="digital marketing, SEO, social media marketing, online advertising, PPC, content marketing, email marketing, digital strategy, Adventure Technology"
  />
  <meta name="author" content="Adventure Technology Team" />

  {/* Open Graph for Social Sharing */}
  <meta property="og:title" content="Digital Marketing by Adventure Technology" />
  <meta
    property="og:description"
    content="Grow your business with comprehensive digital marketing strategies from Adventure Technology. We help you reach and convert your ideal audience online."
  />
  <meta property="og:url" content="https://www.adventuretechnology.com/Digital-Marketing" />
  <meta property="og:image" content="https://img.freepik.com/premium-photo/digital-marketing-new-startup-project-online-search-engine-optimisation_36325-2205.jpg" />
</Helmet>

      <MarkHome/>
      <MarkOffer/>
      <WhyMark/>
      <MarkTools/>
      <MarkDevelopmentProcess/>
      <MarkFAQ/>
    </>
  )
}

export default DigitalMarket
