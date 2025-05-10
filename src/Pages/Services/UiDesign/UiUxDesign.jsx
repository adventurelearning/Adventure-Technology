import React from 'react'
import UiHome from '../../../Components/UiServ/UiHome'
import UiOffer from '../../../Components/UiServ/UiOffer'
import WhyWeb from '../../../Components/webServ/WhyWeb'
import UiTools from '../../../Components/UiServ/UiTools'
import UiDevelopmentProcess from '../../../Components/UiServ/UiDevelopmentProcess'
import UiFAQ from '../../../Components/UiServ/UiFAQ'
import { Helmet } from 'react-helmet'
const UiUxDesign = () => {
  return (
    <>
        <Helmet>
  <title>UI/UX Design Services | Adventure Technology</title>
  <meta
    name="description"
    content="Adventure Technology crafts intuitive UI/UX design experiences that captivate users and drive engagement. We turn complex ideas into beautiful, user-friendly interfaces."
  />
  <meta
    name="keywords"
    content="UI design, UX design, user interface, user experience, product design, app design, Adventure Technology, digital design services"
  />
  <meta name="author" content="Adventure Technology Team" />

  {/* Open Graph for Social Sharing */}
  <meta property="og:title" content="UI/UX Design by Adventure Technology" />
  <meta
    property="og:description"
    content="Transform your digital products with expert UI/UX design from Adventure Technology. We create seamless and engaging user experiences."
  />
  <meta property="og:url" content="https://www.adventuretechnology.com/UiUx-Design" />
  <meta property="og:image" content="https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150038916.jpg?ga=GA1.1.1569503994.1746852108&semt=ais_hybrid&w=740"/>
</Helmet>

      <UiHome/>
      <UiOffer/>
      {/* <WhyWeb/>  */}
      <UiTools/>
      <UiDevelopmentProcess/>
      <UiFAQ/>      
    </>
  )
}

export default UiUxDesign
