'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import styles from './slider.module.css'

export function Slider() {
  return (
    <Swiper
      className={styles.slider}
      modules={[Navigation, Pagination, A11y]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <Image
          src="/aluno-1.png"
          alt="Resultado de tatuagem feita por aluno da Mandy"
          width={400}
          height={550}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/aluno-2.png"
          alt="Resultado de tatuagem feita por aluno da Mandy"
          width={400}
          height={550}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/aluno-3.png"
          alt="Resultado de tatuagem feita por aluno da Mandy"
          width={400}
          height={550}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/aluno-4.png"
          alt="Resultado de tatuagem feita por aluno da Mandy"
          width={400}
          height={550}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/aluno-5.png"
          alt="Resultado de tatuagem feita por aluno da Mandy"
          width={400}
          height={550}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/aluno-6.png"
          alt="Resultado de tatuagem feita por aluno da Mandy"
          width={400}
          height={550}
        />
      </SwiperSlide>
    </Swiper>
  )
}
