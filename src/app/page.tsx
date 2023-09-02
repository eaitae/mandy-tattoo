import { cn } from '@/lib/utils'
import { Instagram } from 'lucide-react'
import Image from 'next/image'
import { Slider } from './slider'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Location } from './location'
import { Faq } from './faq'
import { Navbar } from '@/components/navbar'

const works = Array.from({ length: 9 }, (_, i) => `/work-${i + 1}.jpg`)

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-10 md:gap-16 lg:gap-20">
      <Header />

      <Info />

      <main className="flex flex-col gap-10 px-4 md:gap-16 lg:gap-20 lg:px-10">
        <Gallery />
        <Testimonial />
        <Bio />
        <Budget />
        <FAQ />
      </main>

      <footer className="flex flex-col gap-10 px-4 pb-10 md:gap-16 lg:gap-20">
        <div className="flex flex-col gap-6">
          <h2 className="text-center text-3xl md:text-left md:text-4xl lg:text-5xl xl:text-6xl">
            Nossa <span className="text-secondary">localização</span>
          </h2>
          <p className="text-lg xl:text-xl 2xl:text-2xl">
            O estúdio Mandy Tattoo é privativo, com atendimento somente com hora
            marcada. Conta com um espaço aconchegante, organizado e limpo,
            prezando sempre pelo seu conforto.
          </p>
          <p className="text-lg xl:text-xl 2xl:text-2xl">
            É de fácil acesso via transporte público, ficando ao lado da estação
            de metrô Águas Claras e próximo ao ponto de ônibus. Caso deseje vir
            de carro, há a opção de estacionamento privado.
          </p>
        </div>
        <Location />
      </footer>
      <Image
        className="max-h-10 w-full"
        src="/white-lines-divisor.png"
        alt="Divisor de conteúdo"
        width={4269}
        height={313}
      />
    </div>
  )
}

function Header() {
  return (
    <header className="relative h-[50vh] w-full md:h-screen">
      <Navbar>
        <Link href="/">
          <Image
            className="w-[50vw] md:w-[25vw]"
            src="/mandy-logo.png"
            alt="Mandy Tattoo logo"
            width={1366}
            height={768}
            priority
          />
        </Link>
      </Navbar>

      <Image
        className="relative -z-10 max-h-[50vh] w-full object-cover md:h-screen md:max-h-screen"
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
  posY: 'bot' | 'top'
  text: string
}

function Indication({ posX, posY, text }: IndicationProps) {
  const alignItems = posY === 'bot' ? 'items-end' : 'items-start'

  return (
    <div
      className={cn(
        `flex w-full ${alignItems} w-10/12 justify-end gap-4 md:w-9/12 lg:w-8/12 xl:w-6/12`,
        {
          'flex-row-reverse': posX === 'left',
          'self-end': posX === 'right',
        },
      )}
    >
      <p
        className={cn('lg:text-xl xl:text-2xl', {
          'mt-3': posY === 'top',
          'mb-3': posY === 'bot',
        })}
      >
        {text}
      </p>
      <Image
        className="w-6/12"
        src={`/${posY}-${posX}-indicator.png`}
        alt="Indicador textual"
        width={368.6}
        height={77.6}
      />
    </div>
  )
}

function Info() {
  return (
    <section className="-mt-[10rem] flex flex-col gap-16 md:-mt-[14rem] lg:-mt-[28rem]">
      <Indication
        posX="right"
        posY="bot"
        text="Especialista em tatuagens de anime e temática oriental"
      />
      <Indication
        posX="left"
        posY="top"
        text="Tatuagens exclusivas e personalizadas especialmente para você"
      />
      <Indication
        posX="right"
        posY="top"
        text="Estúdio privado pensado para o seu conforto"
      />
      <Indication
        posX="left"
        posY="bot"
        text="Utilização de técnicas modernas e dos melhores materiais disponíveis no mercado"
      />
    </section>
  )
}

function Gallery() {
  return (
    <section className="flex flex-col gap-10">
      <header className="flex flex-col items-center gap-2 md:flex-row md:items-end">
        <h2 className="grow text-center text-3xl md:text-left md:text-4xl lg:text-5xl xl:text-6xl">
          Conheça o meu <span className="text-primary">trabalho</span>...
        </h2>

        <Button asChild variant="link">
          <Link href="https://www.instagram.com/mandytattoodf/" target="_blank">
            <Instagram className="mr-2 inline" size="2rem" />
            <span className="text-xl text-foreground md:text-xl lg:text-2xl">
              @mandytattoodf
            </span>
          </Link>
        </Button>
      </header>
      <div className="grid grid-cols-3 grid-rows-3 gap-6">
        {/* TODO: adjust alts */}
        {works.map((work) => (
          <Image
            className="aspect-[9/10] w-full object-cover"
            key={work}
            src={work}
            alt="..."
            width={2861}
            height={3603}
          />
        ))}
      </div>
    </section>
  )
}

function Testimonial() {
  return (
    <section className="flex flex-col items-center gap-10">
      <h2 className="w-full text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        O que estão <span className="text-primary">falando</span> sobre mim...
      </h2>
      <Slider />
      <Button
        variant="outline"
        className="h-16 w-64 border-2 border-secondary p-4 text-2xl font-bold text-secondary transition duration-300 hover:bg-secondary hover:text-white"
      >
        Quero agendar!
      </Button>
    </section>
  )
}

function Bio() {
  return (
    <section className="flex flex-col gap-4 md:flex-row ">
      <h2 className="text-center text-3xl md:hidden">
        Quem é a <span className="text-secondary">artista</span>?
      </h2>
      <Image
        className="max-h-screen w-full object-contain md:w-6/12 lg:w-4/12"
        src="/mandy-bio-2.png"
        alt="..."
        width={1504}
        height={1906}
      />
      <div className="flex flex-col items-center justify-around gap-6 text-2xl">
        <h2 className="hidden w-full text-3xl md:block md:text-4xl lg:text-5xl xl:text-6xl">
          Quem é a <span className="text-secondary">artista</span>?
        </h2>
        <div className="flex flex-col gap-8 text-justify text-lg text-[#E2E1DD] xl:text-xl 2xl:text-2xl">
          <p>
            Prazer, <span className="italic">Mandy</span>!
          </p>
          <p>
            Eu sempre gostei de desenhar, desde criança. Com o tempo, a tinta no
            papel se transformou em tinta na pele, e há 5 anos, encontrei o que
            gosto de fazer: tatuar. Hoje, depois de muita dedicação, sou
            referência no nicho de tatuagens de anime e temática oriental.
          </p>
          <p>
            Com mais de 16 mil seguidores no Instagram, minha arte transcende
            fronteiras: fui chamada para ser tatuadora convidada na Europa,
            marcando minha presença em cidades icônicas como Londres e Berlim.
          </p>
          <p>
            Para mim, cada pessoa é única, e cada tatuagem também deve ser. Todo
            trabalho é uma oportunidade de criar algo exclusivo, pensado e
            desenhado especificamente para cada cliente.
          </p>
          <p>
            Atualmente, eu também dedico parte do meu tempo ensinando técnicas
            modernas de tatuagem em cursos e mentorias. Meu objetivo? Formar
            tatuadores profissionais e qualificados, garantindo que nossa
            profissão esteja em boas mãos.
          </p>
        </div>
        <Button className="h-16 w-64 border-2 bg-secondary p-4 text-lg font-bold text-[#060606] transition duration-300 hover:bg-[#060606] hover:text-white xl:text-xl 2xl:text-2xl">
          Entrar em contato
        </Button>
      </div>
    </section>
  )
}

function Budget() {
  return (
    <section id="orcamentos" className="flex flex-col gap-4 md:flex-row">
      <div className="flex flex-col items-center justify-around gap-6 text-2xl">
        <h2 className="text-center text-3xl md:text-left md:text-4xl lg:text-5xl xl:text-6xl">
          Como fazer um <span className="text-primary">orçamento</span>?
        </h2>
        <div className="flex flex-col gap-8 text-justify text-lg text-[#E2E1DD] xl:text-xl 2xl:text-2xl">
          <p>
            {/* TODO: add link */}O orçamento é realizado via Whatsapp, com a
            nossa querida Jess. Ela possui todo o conhecimento necessário para
            te auxiliar nesse processo.
          </p>
          <p>
            Para agilizar seu atendimento, ao mandar sua primeira mensagem,
            informe seu nome e as seguintes informações:
          </p>
          <ul className="list-disc pl-6">
            <li>Ideia para a tattoo com imagens de refêrencias</li>
            <li>
              Foto do local do corpo que você pretende tatuar, de preferência
              circulando o lugar exato em que você quer a tattoo
            </li>
            <li>O tamanho aproximado que você deseja, em centímetros</li>
          </ul>
          <p>
            Lembre-se que a tatuagem é uma arte na pele para a vida toda, então
            reserve um tempo para fazer o orçamento com calma!
          </p>
        </div>

        <Button className=" h-16 w-64 border-2 bg-secondary p-4 text-lg font-bold text-[#060606] transition duration-300 hover:bg-[#060606] hover:text-white xl:text-xl 2xl:text-2xl">
          Fazer orçamento
        </Button>
      </div>
      <Image
        className="max-h-screen w-full rounded-[2rem] object-contain md:w-6/12 lg:w-4/12"
        src="/mandy-orcamento.jpeg"
        alt="Mandy realizando tatuagem em um braço"
        width={750}
        height={1114}
      />
    </section>
  )
}

function FAQ() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-center text-3xl md:text-left md:text-4xl lg:text-5xl xl:text-6xl">
        Perguntas
        <span className="text-primary"> frequentes</span>
      </h2>
      <Faq />
    </section>
  )
}
