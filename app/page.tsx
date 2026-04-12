import HeroSlider       from '@/components/home/HeroSlider'
import OwnerSection     from '@/components/home/OwnerSection'
import ServicesGrid     from '@/components/home/ServicesGrid'
import StatsBanner      from '@/components/home/StatsBanner'
import WhyUs            from '@/components/home/WhyUs'
import AboutSnippet     from '@/components/home/AboutSnippet'
import ReviewsSlider    from '@/components/home/ReviewsSlider'
import ContactCTA       from '@/components/home/ContactCTA'
import MapSection       from '@/components/home/MapSection'
import TransitionBanner from '@/components/ui/TransitionBanner'

export default function Home() {
  return (
    <>
      <HeroSlider />
      <TransitionBanner variant="owner" />
      <OwnerSection />
      <TransitionBanner variant="services" />
      <ServicesGrid />
      <StatsBanner />
      <TransitionBanner variant="whyus" />
      <WhyUs />
      <AboutSnippet />
      <TransitionBanner variant="reviews" />
      <ReviewsSlider />
      <ContactCTA />
      <MapSection />
    </>
  )
}
