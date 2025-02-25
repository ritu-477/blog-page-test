
import DetailsHero from '@/components/blog details/DetailsHero'
import MarketInsights from '@/components/blog details/MarketInsights'
import LatestArticles from '@/components/blog/LatestArticles'
import Footer from '@/components/common/Footer'

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
