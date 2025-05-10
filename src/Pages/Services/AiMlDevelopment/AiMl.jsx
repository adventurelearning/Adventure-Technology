import React from 'react'
import AiHome from '../../../Components/AiServ/AiHome'
import AiOffer from '../../../Components/AiServ/AiOffer'
import WhyWeb from '../../../Components/webServ/WhyWeb'
import AiTools from '../../../Components/AiServ/AiTools'
import AiDevelopmentProcess from '../../../Components/AiServ/AiDevelopmentProcess'
import AiFAQ from '../../../Components/AiServ/AiFAQ'
import { Helmet } from 'react-helmet'
const AiMl = () => {
  return (
    <>
  <Helmet>
  <title>AI & ML Development Services | Adventure Technology</title>
  <meta
    name="description"
    content="Adventure Technology provides AI and ML development services that enable intelligent automation, predictive analytics, and smarter decision-making for businesses of all sizes."
  />
  <meta
    name="keywords"
    content="AI development, ML development, artificial intelligence, machine learning, deep learning, predictive analytics, intelligent automation, Adventure Technology"
  />
  <meta name="author" content="Adventure Technology Team" />

  {/* Open Graph for Social Sharing */}
  <meta property="og:title" content="AI & ML Solutions by Adventure Technology" />
  <meta
    property="og:description"
    content="Harness the power of artificial intelligence and machine learning with custom solutions from Adventure Technology. Empower your business with smarter technology."
  />
  <meta property="og:url" content="https://www.adventuretechnology.com/AI-ML-Development" />
  <meta property="og:image" content="https://img.freepik.com/premium-photo/futuristic-robot-artificial-intelligence-concept_31965-5467.jpg?ga=GA1.1.1569503994.1746852108&semt=ais_hybrid&w=740" />
</Helmet>

      <AiHome/>
      <AiOffer/>
      {/* <WhyWeb/>  */}
      <AiTools/>
      <AiDevelopmentProcess/>
      <AiFAQ/>
    </>
  )
}

export default AiMl
