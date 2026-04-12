'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { REVIEWS } from '@/lib/constants'
import SectionBackground from '@/components/ui/SectionBackground'

export default function ReviewsSlider() {
  return (
    <section className="relative overflow-hidden py-24 px-6 bg-gradient-to-b from-navy to-navyDark">

      <SectionBackground circleSize={450} circleSize2={350} />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
            Referanslar
          </span>
          <h2 className="font-serif text-4xl text-white mt-2 gold-line">
            Müşterilerimiz Ne Diyor?
          </h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          pagination={{ clickable: true }}
          breakpoints={{
            768:  { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {REVIEWS.map((review, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full">
                <div className="text-6xl text-gold font-serif leading-none mb-4 select-none">&ldquo;</div>
                <p className="text-white/85 italic text-sm leading-relaxed mb-6">{review.text}</p>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${i < review.rating ? 'text-gold' : 'text-white/20'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gold font-bold text-sm">{review.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
