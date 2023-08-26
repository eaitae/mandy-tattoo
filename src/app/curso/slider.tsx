'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

type SliderProps = {
  className?: string
}

export function Slider({ className }: SliderProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <Image
          src="/aluno-1.png"
          alt="Resultado de tatuagem feita por aluno da Mandy"
          width={300}
          height={450}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/aluno-2.png"
          alt="Resultado de tatuagem feita por aluno da Mandy"
          width={300}
          height={450}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/aluno-3.png"
          alt="Resultado de tatuagem feita por aluno da Mandy"
          width={300}
          height={450}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/aluno-4.png"
          alt="Resultado de tatuagem feita por aluno da Mandy"
          width={300}
          height={450}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/aluno-5.png"
          alt="Resultado de tatuagem feita por aluno da Mandy"
          width={300}
          height={450}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/aluno-6.png"
          alt="Resultado de tatuagem feita por aluno da Mandy"
          width={300}
          height={450}
        />
      </SwiperSlide>
    </Swiper>
  )
}
