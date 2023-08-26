'use client'

import { Navigation, Pagination, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import * as Icons from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import styles from './slider.module.css'

type Data = {
  text: string
  author: string
  rate: 1 | 2 | 3 | 4 | 5
}
const data: Data[] = [
  {
    text: '"A Mandy é uma excelente profissional e muito atenciosa! Tanto ela quanto a Jess me recepcionaram muito bem e explicaram detalhadamente tudo sobre o processo e sobre os cuidados. As artes que ela cria são incríveis, recomendo bastante para quem curte  tatuagens geek, animes, etc."',
    author: 'Gibson Rolemberg',
    rate: 5,
  },
  {
    text: '"Outro texto."',
    author: 'Babi',
    rate: 1,
  },
]

const ratings = [1, 2, 3, 4, 5]

export function Slider() {
  return (
    <Swiper
      className={styles.slider}
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {data.map(({ text, author, rate }) => (
        <SwiperSlide key={author}>
          <Card className="h-[300px] w-6/12 bg-[#f7f9f6] text-left text-2xl text-background">
            <CardContent className="flex h-full flex-col justify-around">
              <p>{text}</p>
              <p className="font-bold">- {author}</p>
              <div className="flex justify-center">
                {ratings.map((ratePosition) => (
                  <Icons.Star
                    key={author + ratePosition}
                    color="#d048cd"
                    fill={rate >= ratePosition ? '#d048cd' : '#f7f9f6'}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
