import React from 'react'
import DataHome from '../../../Components/DataServ/DataHome'
import DataOffer from '../../../Components/DataServ/DataOffer'
import WhyData from '../../../Components/DataServ/WhyData'
import DataTools from '../../../Components/DataServ/DataTools'
import DataDevelopmentProcess from '../../../Components/DataServ/DataDevelopmentProcess'
import DataFAQ from '../../../Components/DataServ/DataFAQ'
import { Helmet } from 'react-helmet';
const DataScience = () => {
  return (
    <>
      
<Helmet>
  <title>Data Science Services | Adventure Technology</title>
  <meta
    name="description"
    content="Adventure Technology empowers organizations through data science, delivering actionable insights, predictive models, and data-driven strategies that fuel business success."
  />
  <meta
    name="keywords"
    content="data science, machine learning, predictive analytics, data engineering, AI solutions, big data, data visualization, business intelligence, Adventure Technology"
  />
  <meta name="author" content="Adventure Technology Team" />

  {/* Open Graph for Social Sharing */}
  <meta property="og:title" content="Data Science by Adventure Technology" />
  <meta
    property="og:description"
    content="Transform raw data into valuable insights with expert data science solutions from Adventure Technology. Unlock the power of machine learning and analytics."
  />
  <meta property="og:url" content="https://www.adventuretechnology.com/Data-Science" />
  <meta property="og:image" content="https://img.freepik.com/premium-photo/future-artificial-intelligence-robot-cyborg_31965-7136.jpg?ga=GA1.1.1569503994.1746852108&semt=ais_hybrid&w=740" />
</Helmet>

      <DataHome/>
      <DataOffer/>
      <WhyData/>
      <DataTools/>
      <DataDevelopmentProcess/>
      <DataFAQ/>
    </>
  )
}

export default DataScience
