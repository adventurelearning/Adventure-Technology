import React from 'react'
import EmbDisHome from '../../../Components/EmbDesignServ/EmbDisHome'
import EmbDisOffer from '../../../Components/EmbDesignServ/EmbDisOffer'
import EmbDisTools from '../../../Components/EmbDesignServ/EmbDisTools'
import EmbDisDevelopmentProcess from '../../../Components/EmbDesignServ/EmbDisDevelopmentProcess'
import EmbDisFAQ from '../../../Components/EmbDesignServ/EmbDisFAQ'
import WhyEmbDis from '../../../Components/EmbDesignServ/WhyEmbDis'

const EmpDesign = () => {
  return (
    <div>
      <EmbDisHome />
      <EmbDisOffer />
      <WhyEmbDis/>
      <EmbDisTools />
      <EmbDisDevelopmentProcess />
      <EmbDisFAQ />
    </div>
  )
}

export default EmpDesign
