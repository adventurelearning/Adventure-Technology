import React from 'react'
import WebHome from '../../../Components/webServ/WebHome'
import WebOffer from '../../../Components/webServ/WebOffer'
import WebDevelopmentProcess from '../../../Components/webServ/WebDevelopmentProcess'
import WebTools from '../../../Components/webServ/WebTools'
import WhyWeb from '../../../Components/webServ/WhyWeb'
import WebFAQ from '../../../Components/webServ/WebFAQ'
import { Helmet } from 'react-helmet'

const WebDevelopment = () => {
  return (
    <>
     <Helmet>
  <title>Web Development Services | Adventure Technology</title>
  <meta
    name="description"
    content="Adventure Technology offers cutting-edge web development services that drive digital transformation. From custom websites to enterprise solutions, we deliver innovation that empowers your business."
  />
  <meta
    name="keywords"
    content="web development, software development, custom websites, digital solutions, technology services, Adventure Technology, enterprise web apps"
  />
  <meta name="author" content="Adventure Technology Team" />

  {/* Open Graph for Social Sharing */}
  <meta property="og:title" content="Web Development by Adventure Technology" />
  <meta
    property="og:description"
    content="Discover high-performance web development solutions crafted by Adventure Technology. We turn ideas into digital experiences that scale."
  />
  <meta property="og:url" content="https://www.adventuretechnology.com/Web-Development" />
  <meta property="og:image" content="https://media.licdn.com/dms/image/v2/D5612AQGvXXjCBq-Etg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1688710312431?e=2147483647&v=beta&t=VcJ32B4UgNZ0IxGIqklVdjvATtNWVhZmW39gpn8Um0g" />
</Helmet>

      <WebHome/>
      <WebOffer/>
      <WhyWeb/>      
      <WebTools/>
      <WebDevelopmentProcess/>
      <WebFAQ/>
    </>
  )
}

export default WebDevelopment
