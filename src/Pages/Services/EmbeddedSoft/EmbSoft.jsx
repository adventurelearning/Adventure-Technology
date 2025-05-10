import React from 'react'
import EmbHome from '../../../Components/EmbSoftServ/EmbHome'
import EmbOffer from '../../../Components/EmbSoftServ/EmbOffer'
import EmbTools from '../../../Components/EmbSoftServ/EmbTools'
import EmbDevelopmentProcess from '../../../Components/EmbSoftServ/EmbDevelopmentProcess'
import EmbFAQ from '../../../Components/EmbSoftServ/EmbFAQ'
import WhyEmb from '../../../Components/EmbSoftServ/WhyEmb'
import { Helmet } from 'react-helmet'

const EmbSoft= () => {
  return (
    <>
      <Helmet>
  <title>Embedded Sofware Services | Adventure Technology</title>
  <meta
    name="description"
    content="Adventure Technology delivers advanced embedded development services, building efficient, real-time systems that power smart devices and enhance product performance."
  />
  <meta
    name="keywords"
    content="embedded development, embedded systems, firmware development, real-time systems, microcontrollers, IoT devices, embedded software, Adventure Technology"
  />
  <meta name="author" content="Adventure Technology Team" />

  <meta property="og:title" content="Embedded Development by Adventure Technology" />
  <meta
    property="og:description"
    content="Unlock the potential of embedded systems with custom solutions from Adventure Technology. We engineer reliable firmware and smart device integrations."
  />
  <meta property="og:url" content="https://www.adventuretechnology.com/Embedded-Design" />
  <meta property="og:image" content="https://img.freepik.com/premium-photo/detailed-illustration-complex-microchip-with-intricate-circuit-board_1114494-8458.jpg?ga=GA1.1.1569503994.1746852108&semt=ais_hybrid&w=740" />
</Helmet>

      <EmbHome/>
      <EmbOffer/>
      {/* <WhyEmb/>  */}
      <EmbTools/>
      <EmbDevelopmentProcess/>
      <EmbFAQ/>
    </>
  )
}

export default EmbSoft;
