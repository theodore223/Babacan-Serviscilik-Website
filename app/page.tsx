import HeroSlider    from '@/components/home/HeroSlider'
import OwnerSection  from '@/components/home/OwnerSection'
import ServicesGrid  from '@/components/home/ServicesGrid'
import StatsBanner   from '@/components/home/StatsBanner'
import WhyUs         from '@/components/home/WhyUs'
import AboutSnippet  from '@/components/home/AboutSnippet'
import ReviewsSlider from '@/components/home/ReviewsSlider'
import ContactCTA    from '@/components/home/ContactCTA'
import MapSection    from '@/components/home/MapSection'

export default function Home() {
  return (
    <>
      <HeroSlider />
      <OwnerSection />
      <ServicesGrid />
      <StatsBanner />
      <WhyUs />
      <AboutSnippet />
      <ReviewsSlider />
      <ContactCTA />
      <MapSection />
    </>
  )
}
