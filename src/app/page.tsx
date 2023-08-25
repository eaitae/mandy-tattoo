import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header />
      <section>
        <Indication posX="left" posY="upper" />
        <Indication posX="left" posY="upper" />
        <Indication posX="right" posY="lower" />
        <Indication posX="right" posY="lower" />
      </section>
    </>
  )
}

function Header() {
  return (
    <header className="relative h-screen w-screen">
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
        className="relative -z-10 h-screen w-screen object-cover"
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
  const justifyContent = posX === 'left' ? 'justify-start' : 'justify-end'
  const alignItems = posY === 'lower' ? 'items-end' : 'items-start'

  return (
    <div
      className={`flex w-screen flex-wrap ${alignItems} ${justifyContent} gap-4`}
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
