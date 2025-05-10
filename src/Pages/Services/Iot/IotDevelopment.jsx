import React from 'react'
import IotHome from '../../../Components/IotServ/IotHome'
import IotOffer from '../../../Components/IotServ/IotOffer'
import WhyWeb from '../../../Components/webServ/WhyWeb'
import IotTools from '../../../Components/IotServ/IotTools'
import IotDevelopmentProcess from '../../../Components/IotServ/IotDevelopmentProcess'
import IotFAQ from '../../../Components/IotServ/IotFAQ'
import { Helmet } from 'react-helmet'
const IotDevelopment = () => {
  return (
    <>
      <Helmet>
  <title>IoT Development Services | Adventure Technology</title>
<meta
  name="description"
  content="Adventure Technology delivers cutting-edge IoT development services, creating smart, connected solutions that transform operations and enhance user experiences."
/>
<meta
  name="keywords"
  content="IoT development, Internet of Things, smart devices, connected solutions, IoT applications, embedded systems, edge computing, Adventure Technology"
/>
<meta name="author" content="Adventure Technology Team" />


<meta property="og:title" content="IoT Development by Adventure Technology" />
<meta
  property="og:description"
  content="Leverage the power of IoT with custom-built solutions from Adventure Technology. We design and develop smart systems tailored to your business goals."
/>
<meta property="og:url" content="https://www.adventuretechnology.com/Iot-development" />
<meta property="og:image" content="https://img.freepik.com/free-photo/futuristic-smart-city-with-5g-global-network-technology_53876-98438.jpg?ga=GA1.1.1569503994.1746852108&semt=ais_hybrid&w=740" />

</Helmet>      
      <IotHome/>
      <IotOffer/>
      <WhyWeb/> 
      <IotTools/>
      <IotDevelopmentProcess/>
      <IotFAQ/>
    </>
  )
}

export default IotDevelopment
