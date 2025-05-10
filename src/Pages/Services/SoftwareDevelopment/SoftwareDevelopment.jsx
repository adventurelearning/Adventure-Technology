import React from 'react'
import SoftHome from '../../../Components/SoftServ/SoftHome'
import SoftOffer from '../../../Components/SoftServ/SoftOffer'
import SoftDevelopmentProcess from '../../../Components/SoftServ/SoftDevelopmentProcess'
import SoftTools from '../../../Components/SoftServ/SoftTools'
import SoftFAQ from '../../../Components/SoftServ/SoftFAQ'
import WhyWeb from '../../../Components/webServ/WhyWeb'
import { Helmet } from 'react-helmet'

const SoftwareDevelopment = () => {
  return (
    <>
     <Helmet>
  <title>Software Development Services | Adventure Technology</title>
  <meta
    name="description"
    content="Adventure Technology specializes in innovative software development solutions, crafting custom applications that optimize business processes and deliver outstanding performance."
  />
  <meta
    name="keywords"
    content="software development, custom software, enterprise applications, mobile development, web development, application development, software solutions, Adventure Technology"
  />
  <meta name="author" content="Adventure Technology Team" />

  {/* Open Graph for Social Sharing */}
  <meta property="og:title" content="Software Development by Adventure Technology" />
  <meta
    property="og:description"
    content="Accelerate your business with tailored software development services from Adventure Technology. We deliver high-performance software that meets your unique needs."
  />
  <meta property="og:url" content="https://www.adventuretechnology.com/Software-Development" />
  <meta property="og:image" content="https://img.freepik.com/premium-photo/crm-customer-relationship-management-business-sales-marketing-system-concept_31965-13456.jpg?ga=GA1.1.1569503994.1746852108&semt=ais_hybrid&w=740"/>
</Helmet>

      <SoftHome />
      <SoftOffer />
      {/* <WhyWeb/>  */}
      <SoftTools />
      <SoftDevelopmentProcess />
      <SoftFAQ />

    </>
  )
}

export default SoftwareDevelopment
