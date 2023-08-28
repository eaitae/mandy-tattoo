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
    text: '"Equipe sensacional. A Mandy é a tatuadora mais talentosa que já conheci. A limpeza do estúdio, a higiene e cuidado da tatuadora são fora de série. Minha tatuagem ficou melhor que eu imaginei. Recomendo demais"',
    author: 'Elaine Sousa',
    rate: 5,
  },
  {
    text: '"Foi tudo ótimo! É a segunda vez que fui lá, a primeira foi no primeiro flashday, que deu para ver que mandy trabalhou muuuito e estava um pouco cansada, mas mesmo assim fez um trabalho ótimo! Dessa vez achei muito melhor, mais tranquilo, mais sossegado e adorei as tattoos, até minha namorada disse que quer fazer um cubone igual o meu kkkkk, ela arrasa, é super atenciosa, profissional e pelo visto preza pela excelência ! Faremos outras, com fé em Deus kkk ❤️ Ela arrasa !"',
    author: 'Yohan Santanna',
    rate: 5,
  },
  {
    text: '"Desde o primeiro contato pelas redes sociais até o momento da tattoo foi incrível, o nível de organização e cuidados (com o cliente, higiene e atendimento) são de primeiríssimo nível! Ambiente agradável e perfeito! Isso tudo sem dizer no trabalho sensacional da Mandy com a tatuagem, de longe a melhor!!! Só tenho a agradecer a todos envolvidos do pré tattoo até o pós!"',
    author: 'Conrado Albertini',
    rate: 5,
  },
  {
    text: '"Estúdio limpo e bem localizado, de fácil acesso em Águas Claras/DF. Agendamento rápido e atendimento via WhatsApp muito bom. Tatuadora educada e bastante profissional, recomendo o trabalho da Mandy a todos que estejam buscando por profissionais que façam tatuagens no estilo geek. ☺️"',
    author: 'Mayra Alice',
    rate: 5,
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
          <Card className="h-[30rem] w-6/12 rounded-[2rem] bg-[#f7f9f6] text-left text-2xl text-background">
            <CardContent className="flex h-full flex-col justify-around p-8">
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
