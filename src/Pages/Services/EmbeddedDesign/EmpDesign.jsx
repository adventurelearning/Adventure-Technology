import React from 'react'
import EmbDisHome from '../../../Components/EmbDesignServ/EmbDisHome'
import EmbDisOffer from '../../../Components/EmbDesignServ/EmbDisOffer'
import EmbDisTools from '../../../Components/EmbDesignServ/EmbDisTools'
import EmbDisDevelopmentProcess from '../../../Components/EmbDesignServ/EmbDisDevelopmentProcess'
import EmbDisFAQ from '../../../Components/EmbDesignServ/EmbDisFAQ'
import WhyEmbDis from '../../../Components/EmbDesignServ/WhyEmbDis'
import { Helmet } from 'react-helmet'

const EmpDesign = () => {
  return (
    <>
     <Helmet>
      <title>Embedded Product Design | Adventure Technology</title>
      <meta
        name="description"
        content="Adventure Technology delivers advanced embedded development services, building efficient, real-time systems that power smart devices and enhance product performance."
      />
      <meta
        name="keywords"
        content="embedded product design, embedded systems, firmware development, real-time systems, microcontrollers, IoT devices, embedded software, Adventure Technology"
      />
      <meta name="author" content="Adventure Technology Team" />
    
      <meta property="og:title" content="Embedded Development by Adventure Technology" />
      <meta
        property="og:description"
        content="Unlock the potential of embedded systems with custom solutions from Adventure Technology. We engineer reliable firmware and smart device integrations."
      />
      <meta property="og:url" content="https://www.adventuretechnology.com/Embedded-Design" />
      <meta property="og:image" content="https://img.freepik.com/free-vector/wearable-technology-isometric-flowchart_1284-19018.jpg?ga=GA1.1.1569503994.1746852108&semt=ais_hybrid&w=740" />
    </Helmet>
    
      <EmbDisHome />
      <EmbDisOffer />
      {/* <WhyEmbDis/> */}
      <EmbDisTools />
      <EmbDisDevelopmentProcess />
      <EmbDisFAQ />
    </>
  )
}

export default EmpDesign
