import { cn } from '@/lib/utils'
import * as Icons from 'lucide-react'
import Image from 'next/image'
import { Slider } from './slider'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-10">
      <Header />
      <section>
        <Indication posX="left" posY="upper" />
        <Indication posX="right" posY="upper" />
        <Indication posX="right" posY="lower" />
        <Indication posX="right" posY="lower" />
      </section>
      <section className="flex flex-col gap-10 px-40">
        <header className="flex items-end gap-2">
          <h2 className="grow text-4xl">
            Conheça o meu <span className="text-primary">trabalho</span>...
          </h2>

          <Button asChild variant="link">
            <Link
              href="https://www.instagram.com/mandytattoodf/"
              target="_blank"
            >
              <Icons.Instagram className="mr-2 inline" size="2rem" />
              <span className="text-2xl text-foreground">@mandytattoo</span>
            </Link>
          </Button>
        </header>
        <div className="grid grid-cols-3 gap-4">
          {/* TODO: adjust alts */}
          <Image src="/work-001.jpg" alt="..." width={2861} height={3603} />
          <Image src="/work-001.jpg" alt="..." width={2861} height={3603} />
          <Image src="/work-001.jpg" alt="..." width={2861} height={3603} />
          <Image src="/work-001.jpg" alt="..." width={2861} height={3603} />
          <Image src="/work-001.jpg" alt="..." width={2861} height={3603} />
          <Image src="/work-001.jpg" alt="..." width={2861} height={3603} />
          <Image src="/work-001.jpg" alt="..." width={2861} height={3603} />
          <Image src="/work-001.jpg" alt="..." width={2861} height={3603} />
          <Image src="/work-001.jpg" alt="..." width={2861} height={3603} />
        </div>
      </section>

      <section className="flex flex-col items-center px-40">
        <Slider />
        <Button
          variant="outline"
          className="mt-20 h-16 w-64 border-2 border-[#CEE130] p-4 text-[1.4rem] font-bold text-[#CEE130] transition duration-300 hover:bg-[#CEE130] hover:text-white"
        >
          Quero agendar!
        </Button>
      </section>
    </div>
  )
}

function Header() {
  return (
    <header className="relative h-screen w-full">
      <nav className="flex pt-16">
        <Image
          className="w-[45vw]"
          src="/home-logo.svg"
          alt="Mandy Tattoo logo"
          width={1366}
          height={768}
          priority
        />

        <ul className="flex justify-end gap-8 px-16 align-middle text-2xl uppercase">
          <li>Home</li>
          <li>Orçamentos</li>
          <li>Mentoria</li>
          <li>Curso</li>
        </ul>
      </nav>

      <Image
        className="relative -z-10 h-screen w-full object-cover"
        src="/home-background.png"
        alt="Tatuagem do personagem Luffy do anime One Piece"
        fill
        sizes="100vw"
        priority
      />
    </header>
  )
}

type IndicationProps = {
  posX: 'left' | 'right'
  posY: 'lower' | 'upper'
}

function Indication({ posX, posY }: IndicationProps) {
  const alignItems = posY === 'lower' ? 'items-end' : 'items-start'

  return (
    <div
      className={cn(`flex w-full flex-wrap ${alignItems} justify-end gap-4`, {
        'flex-row-reverse': posX === 'left',
      })}
    >
      Especialista em tatuagens de anime e temática oriental
      <Image
        src={`${posY}-${posX}-indicator.svg`}
        alt="Indicador textual"
        width={368.6}
        height={77.6}
      />
    </div>
  )
}
