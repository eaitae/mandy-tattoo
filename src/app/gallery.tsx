'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

import { Button } from '@/components/ui/button'
import { ImageSpotlight } from '@/components/image-spotlight'

import workImage1 from '@/assets/work-1.jpg'
import workImage2 from '@/assets/work-2.jpg'
import workImage3 from '@/assets/work-3.jpg'
import workImage4 from '@/assets/work-4.jpg'
import workImage5 from '@/assets/work-5.jpg'
import workImage6 from '@/assets/work-6.jpg'
import workImage7 from '@/assets/work-7.jpg'
import workImage8 from '@/assets/work-8.jpg'
import workImage9 from '@/assets/work-9.jpg'

const images = [
  { image: workImage1, alt: 'Tatugem do personagem Tengen Uzui em um braço' },
  {
    image: workImage2,
    alt: 'Tatugem do personagem Monkey D. Luffy em um braço',
  },
  {
    image: workImage3,
    alt: 'Tatugem do personagem Edward Elric em um braço',
  },
  {
    image: workImage4,
    alt: 'Tatugem do personagem Shoyo Hinata em um braço',
  },
  {
    image: workImage5,
    alt: 'Tatugem do personagem Sailor Mars em um braço',
  },
  {
    image: workImage6,
    alt: 'Tatugem dos personagens Monkey D. Luffy e Trafalgar D. Water Law em um braço',
  },
  {
    image: workImage7,
    alt: 'Tatugem do personagem Naruto Uzumaki em um braço',
  },
  {
    image: workImage8,
    alt: 'Tatugem do personagem Haku em um braço',
  },
  {
    image: workImage9,
    alt: 'Tatugem do personagem Tobirama Senju em um braço',
  },
] as const

export function Gallery() {
  return (
    <section className="flex flex-col gap-10 md:px-12">
      <header className="flex flex-col items-center gap-2 md:flex-row md:items-end">
        <h2 className="grow text-center text-3xl md:text-left md:text-4xl lg:text-5xl xl:text-6xl">
          Conheça o meu <span className="text-primary">trabalho</span>...
        </h2>

        <Button asChild variant="link">
          <Link href="https://www.instagram.com/mandytattoodf/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} className="h-[1.8rem] pr-2" />
            <span className="text-xl text-foreground md:text-xl lg:text-2xl">
              @mandytattoodf
            </span>
          </Link>
        </Button>
      </header>
      <div className="grid grid-cols-3 grid-rows-3 gap-2 md:gap-6">
        {images.map(({ image, alt }) => (
          <ImageSpotlight
            className="aspect-[9/10] w-full object-cover"
            key={image.src}
            src={image}
            alt={alt}
            sizes="30vw"
          />
        ))}
      </div>
    </section>
  )
}
