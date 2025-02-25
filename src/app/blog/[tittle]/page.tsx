
import DetailsHero from '@/components/about/DetailsHero'
import MarketInsights from '@/components/about/MarketInsights'
import LatestArticles from '@/components/home/LatestArticles'
import Footer from '@/components/common/Footer'
import React from 'react'

const page = () => {
    return (
      <>
      <DetailsHero />
            <MarketInsights />
            <LatestArticles />
            <Footer/>
            </>
  )
}

export default page
