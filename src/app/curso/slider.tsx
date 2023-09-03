'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import styles from './slider.module.css'

import alunoImage1 from '@/assets/aluno-1.png'
import alunoImage2 from '@/assets/aluno-2.png'
import alunoImage3 from '@/assets/aluno-3.png'
import alunoImage4 from '@/assets/aluno-4.png'
import alunoImage5 from '@/assets/aluno-5.png'
import alunoImage6 from '@/assets/aluno-6.png'
import alunoImage7 from '@/assets/aluno-7.png'
import alunoImage8 from '@/assets/aluno-8.png'
import alunoImage9 from '@/assets/aluno-9.png'

const images = [
  alunoImage1,
  alunoImage2,
  alunoImage3,
  alunoImage4,
  alunoImage5,
  alunoImage6,
  alunoImage7,
  alunoImage8,
  alunoImage9,
]

export function Slider() {
  return (
    <Swiper
      className={styles.slider}
      modules={[Navigation, Pagination, A11y]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {images.map((image) => (
        <SwiperSlide key={image.src}>
          <Image
            src={image}
            alt="Resultado de tatuagem feita por aluno da Mandy"
            width={400}
            height={550}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
