import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { cn } from '@/lib/utils'

import { Faq } from './faq'
import { Location } from './location'
import { Slider } from './slider'

import backgroundImage from '@/assets/home-background.png'
import divisorImage from '@/assets/divisor.png'
import logoImage from '@/assets/home-logo.png'
import botLeftIndicatorImage from '@/assets/bot-left-indicator.png'
import botRightIndicatorImage from '@/assets/bot-right-indicator.png'
import totLeftIndicatorImage from '@/assets/top-left-indicator.png'
import totRightIndicatorImage from '@/assets/top-right-indicator.png'
import bioImage from '@/assets/mandy-bio-2.png'
import budgetImage from '@/assets/mandy-orcamento.jpeg'
import { Gallery } from './gallery'

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

      <footer className="flex flex-col gap-10 pb-10 md:gap-16 md:px-16 lg:gap-20 px-4">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
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
        src={divisorImage}
        alt="Divisor de conteúdo"
        placeholder="blur"
        sizes="100vw"
      />
      <Button
        asChild
        className="fixed bottom-4 text-[1.2rem] font-bold right-4 md:w-[16rem] md:h-[3rem] rounded-md bg-white p-2 text-[#060606] hover:bg-primary focus:outline-none focus:ring focus:ring-green-200"
      >
        <Link
          href="https://api.whatsapp.com/send?phone=556182525342&text=Oi!%20Vim%20do%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento!"
          target="_blank"
          className="text-[#060606] hover:text-white"
        >
          <FontAwesomeIcon className='h-[1.6rem] md:pr-2 text-[#25D366]' icon={faWhatsapp} />
          <span className='hidden md:block'>Entrar em contato</span>
        </Link>
      </Button>
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
            src={logoImage}
            alt="Mandy Tattoo logo"
            sizes="(min-width: 768px) 25vw, 50vw"
            priority
          />
        </Link>
      </Navbar>

      <Image
        className="relative -z-10 max-h-[50vh] w-full object-cover md:h-screen md:max-h-screen"
        src={backgroundImage}
        alt="Tatuagem do personagem Luffy do anime One Piece"
        sizes="100vw"
        fill
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

const indicatorMap = {
  'bot-left': botLeftIndicatorImage,
  'bot-right': botRightIndicatorImage,
  'top-left': totLeftIndicatorImage,
  'top-right': totRightIndicatorImage,
} as const

function Indication({ posX, posY, text }: IndicationProps) {
  const alignItems = posY === 'bot' ? 'items-end' : 'items-start'
  const image = indicatorMap[`${posY}-${posX}`]

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
        src={image}
        alt="Indicador textual"
        sizes="(min-width: 768px) 25vw, 35vw"
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

function Testimonial() {
  return (
    <section className="flex flex-col items-center gap-10 md:px-12">
      <h2 className="w-full text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        O que estão <span className="text-primary">falando</span> sobre mim...
      </h2>
      <Slider />
      <Button
        asChild
        variant="outline"
        className="h-16 w-64 border-2 border-secondary p-4 text-2xl font-bold text-secondary transition duration-300 hover:bg-secondary hover:text-white"
      >
        <Link
          href="https://api.whatsapp.com/send?phone=556182525342&text=Oi!%20Vim%20do%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento!"
          target="_blank"
        >
          Quero agendar!
        </Link>
      </Button>
    </section>
  )
}

function Bio() {
  return (
    <section className="flex flex-col gap-4 md:flex-row md:px-12">
      <h2 className="text-center text-3xl md:hidden">
        Quem é a <span className="text-secondary">artista</span>?
      </h2>
      <Image
        className="max-h-screen w-full object-contain md:w-6/12 lg:w-4/12"
        src={bioImage}
        alt="Tatuadora Mandy"
        sizes="(min-width: 768px) 35vw (min-width: 768px) 50vw, 100vw"
        placeholder="blur"
      />
      <div className="flex flex-col items-center justify-around gap-6 text-2xl md:w-6/12 md:pr-8 lg:w-8/12">
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
        <Button
          asChild
          className="h-16 w-64 border-2 bg-secondary p-4 text-lg font-bold text-[#060606] transition duration-300 hover:bg-[#060606] hover:text-white xl:text-xl 2xl:text-2xl"
        >
          <Link
            href="https://api.whatsapp.com/send?phone=556182525342&text=Oi!%20Vim%20do%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento!"
            target="_blank"
          >
            Entrar em contato
          </Link>
        </Button>
      </div>
    </section>
  )
}

function Budget() {
  return (
    <section
      id="orcamentos"
      className="flex flex-col gap-4 md:flex-row md:px-12"
    >
      <div className="flex flex-col items-center justify-around gap-6 text-2xl md:w-6/12 lg:w-8/12">
        <h2 className="text-center text-3xl md:text-left md:text-4xl lg:text-5xl xl:text-6xl">
          Como fazer um <span className="text-primary">orçamento</span>?
        </h2>
        <div className="flex flex-col gap-8 text-justify text-lg text-[#E2E1DD] md:px-12 xl:text-xl 2xl:text-2xl">
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

        <Button
          asChild
          className=" h-16 w-64 border-2 bg-secondary p-4 text-lg font-bold text-[#060606] transition duration-300 hover:bg-[#060606] hover:text-white xl:text-xl 2xl:text-2xl"
        >
          <Link
            href="https://api.whatsapp.com/send?phone=556182525342&text=Oi!%20Vim%20do%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento!"
            target="_blank"
          >
            Fazer orçamento
          </Link>
        </Button>
      </div>
      <Image
        className="max-h-screen w-full rounded-[2rem] object-contain md:w-6/12 lg:w-4/12"
        src={budgetImage}
        alt="Mandy realizando tatuagem em um braço"
        sizes="(min-width: 768px) 35vw (min-width: 768px) 50vw, 100vw"
        placeholder="blur"
      />
    </section>
  )
}

function FAQ() {
  return (
    <section className="flex flex-col gap-4 md:px-12">
      <h2 className="text-center text-3xl md:text-left md:text-4xl lg:text-5xl xl:text-6xl">
        Perguntas
        <span className="text-primary"> frequentes</span>
      </h2>
      <Faq />
    </section>
  )
}
