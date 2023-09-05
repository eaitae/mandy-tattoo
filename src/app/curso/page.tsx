import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Slider } from './slider'
import { Faq } from './faq'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'

import mobileInkBackgroundImage from '@/assets/mandy-bg-mobile.png'
import InkBackgroundImage from '@/assets/mandy-pink-ink-background.png'
import inkImage from '@/assets/icone-ink.png'
import dragonImage from '@/assets/icone-dragon.png'
import machineIcon from '@/assets/icone-maquina.png'
import bonusIcon from '@/assets/icone-bonus.png'
import dotsBackgroundImage from '@/assets/dots-bg.png'
import greenBackgroundImage from '@/assets/mandy-green-bg-mobile.png'
import bioBackgroundImage from '@/assets/mandy-bio-1.png'
import pinkBackgroundImage from '@/assets/mandy-pink-bg.png'
import gokuBackgroundImage from '@/assets/decalque-goku.png'
import gokuMoblieBackgroundImage from '@/assets/decalque-goku-mobile.png'

export const dynamic = 'force-static'

export default function Curso() {
  return (
    <>
      <div>
        <div className="relative z-50 w-full md:absolute">
          <Navbar />
        </div>
        <div className="relative flex h-fit w-full flex-col md:flex-row md:pl-4 2xl:pb-64">
          <div className="p-8 text-center md:relative md:z-10 md:w-[50vw] md:pt-28 md:text-left lg:pl-20 xl:pl-40 2xl:pt-40">
            <h1 className="mb-8 text-[2rem] font-bold md:mb-2 md:text-[2.6rem] lg:mt-16 xl:mb-4 xl:mt-8 xl:text-[2.5rem] 2xl:text-[3.5rem]">
              Sua jornada como <span className="text-secondary">tatuador</span>{' '}
              começa aqui.
            </h1>
            <div className="flex md:hidden">
              <Image
                src={mobileInkBackgroundImage}
                alt="Tatuadora Mandy segurando uma máquina de tatuagem"
                sizes="(min-width: 768px) 0vw, 100vw"
                priority
              />
            </div>
            <h3 className="pt-4 text-[1rem] md:text-[1.2rem] xl:text-[1.5rem]">
              Aprenda tudo o que você precisa para iniciar no mercado da
              tatuagem e se tornar um profissional requisitado e de alto nível.
            </h3>
            <p className="mt-6 text-[0.9rem] italic md:text-[1rem] xl:text-[1.2rem]">
              Com o meu curso intensivo e atualizado, você se tornará o tatuador
              que sempre sonhou!
            </p>
            <Button
              asChild
              variant="outline"
              className="mt-8 h-16 w-60 border-2 border-secondary p-4 text-[1.4rem] font-bold text-secondary transition duration-300 hover:bg-secondary hover:text-white md:mt-12"
            >
              <Link href="https://ig.me/m/mentoriamandytattoo" target="_blank">
                Quero ser tatuador!
              </Link>
            </Button>
          </div>
          <Image
            className="relative hidden h-screen w-full object-cover md:block"
            src={InkBackgroundImage}
            alt="Tatuadora Mandy segurando uma máquina de tatuagem"
            fill
            sizes="(min-width: 768px) 100vw, 0vw"
            priority
          />
        </div>
      </div>

      <div className="relative flex h-fit w-full flex-col">
        <div className="flex flex-col justify-center space-x-4 md:flex-row md:px-40">
          <div className="flex flex-col items-center justify-center p-8 md:h-full md:p-10 lg:p-20">
            <Image
              src={inkImage}
              alt="Desenho de três bisnagas de tinta para tatuagem"
              className="mb-4"
              width={150}
              height={150}
            />
            <h2 className="mb-2 text-center text-[1.6rem] font-bold md:text-[2rem]">
              Aprenda do zero
            </h2>
            <p className="pt-6 text-center">
              Você não precisa de nenhuma experiência prévia, apenas vontade de
              aprender!
              <br />
              <br />
              Irei te ensinar sobre pigmentação, cuidados com a pele,
              biossegurança e muito mais.
            </p>
          </div>

          <div className="flex h-full flex-col items-center justify-center p-8 md:p-10 lg:p-20">
            <Image
              src={dragonImage}
              alt="Desenho de um dragão"
              className="mb-4"
              width={150}
              height={150}
            />
            <h2 className="mb-2 text-center text-[1.6rem] font-bold md:text-[2rem]">
              Faça sua primeira tatuagem
            </h2>
            <p className="pt-6 text-center">
              Tenha a chance de tatuar em pele humana com confiança e comece a
              construir seu portfólio!
              <br />
              <br />
              Você não precisa ter nenhum material, tudo será disponibilizado
              aqui.
            </p>
          </div>

          <div className="flex h-full flex-col items-center justify-center p-8 md:p-10 lg:p-20">
            <Image
              src={machineIcon}
              alt="Desenho de uma máquina de tatuagem"
              className="mb-4"
              width={150}
              height={150}
            />
            <h2 className="mb-2 text-center text-[1.6rem] font-bold md:text-[2rem]">
              Receba seu certificado
            </h2>
            <p className="pt-6 text-center">
              Depois dos 6 módulos concluídos, você receberá seu certificado!
              <br />
              <br />E então é só começar a por em prática e se tornar um
              tatuador de sucesso.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center space-x-4 p-4 md:flex-row">
          <Image
            src={bonusIcon}
            alt="Icone de um presente"
            className="mb-4"
            width={150}
            height={150}
          />
          <h2 className="text-center text-[2rem] font-bold md:pl-8 md:text-left">
            Bônus <br className="hidden md:block" />
            <span className="text-primary">exclusivo</span>:
          </h2>
          <p className="max-w-sm pt-4 text-justify md:pl-4">
            Tenha acesso ao meu Whatsapp pessoal para assistência online durante
            2 meses. Tire todas suas dúvidas e receba auxílio para por em
            prática tudo que foi apresentado durante o curso!
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <Button
            asChild
            variant="outline"
            className="mt-8 h-16 w-64 border-2 border-secondary p-4 text-[1.4rem] font-bold text-secondary transition duration-300 hover:bg-secondary hover:text-white md:my-10"
          >
            <Link href="https://ig.me/m/mentoriamandytattoo" target="_blank">
              Quero esse bônus!
            </Link>
          </Button>
        </div>
        <Image
          className="relative -z-10 max-h-[100vh] w-full object-cover"
          src={dotsBackgroundImage}
          alt="Pontinhos verdes"
          fill
          sizes="100vw"
        />
      </div>

      <div className="relative flex h-fit w-full flex-col pt-4 md:flex-row md:pt-0">
        <div className="relative p-8 text-center md:z-10 md:w-[70vw] md:p-4 md:pl-40 md:pt-20 md:text-left lg:pl-32">
          <h1 className="mb-8 text-left text-[2rem] font-bold md:text-[2.4rem] xl:text-[2.5rem]">
            Se <span className="text-secondary">você</span>...
          </h1>
          <ul className="list-disc pl-6 text-left text-[1.2rem] xl:pl-1">
            <li>Sonha em ser tatuador, mas não sabe como começar</li>
            <br />
            <li>
              Não sabe qual profissão seguir, mas gosta de tatuagem e quer se
              tornar independente através do próprio trabalho
            </li>
            <br />
            <li>
              Tem noção básica de desenho e quer dar o primeiro passo para uma
              carreira de sucesso
            </li>
            <br />
            <li>
              Está iniciando na área, mas não se sente confiante em tatuar em
              pele humana e divulgar seus trabalhos
            </li>
          </ul>
          <p className="mt-6 pt-4 text-center text-[1.5rem] md:text-left">
            Então este é o curso{' '}
            <span className="text-secondary">perfeito para você</span>!
          </p>
          <Image
            className="relative block md:hidden"
            src={greenBackgroundImage}
            alt="Tatuadora Mandy criando uma arte em seu tablet"
            sizes="(min-width: 768px) 0vw, 100vw"
            placeholder="blur"
          />
          <Button
            asChild
            variant="outline"
            className="mt-8 h-16 w-64 border-2 border-primary p-4 text-[1.4rem] font-bold text-primary transition duration-300 hover:bg-primary hover:text-white md:mt-10"
          >
            <Link href="https://ig.me/m/mentoriamandytattoo" target="_blank">
              Quero me inscrever!
            </Link>
          </Button>
        </div>
        <Image
          className="relative hidden h-screen w-full object-contain md:block md:h-fit xl:h-screen"
          src={greenBackgroundImage}
          alt="Tatuadora Mandy criando uma arte em seu tablet"
          sizes="(min-width: 768px) 70vw, 0vw"
          placeholder="blur"
        />
      </div>

      <div className="flex flex-col items-center justify-center space-y-8 p-8">
        <h1 className="text-center text-[1.6rem] font-bold md:mx-40 md:px-20 md:text-[2rem]">
          Estes são alguns dos <span className="text-primary">resultados</span>{' '}
          dos meus alunos durante nosso curso:
        </h1>

        <Slider />

        <p className="mt-6 max-w-md pt-4 text-center text-[1rem] md:text-[1.2rem]">
          Você também pode alcançar um resultado como esse, mesmo sem nunca ter
          tatuado antes!
        </p>

        <div className="flex justify-center space-x-4">
          <Button
            asChild
            variant="outline"
            className="mt-2 h-16 w-64 border-2 border-secondary p-4 text-[1.4rem] font-bold text-secondary transition duration-300 hover:bg-secondary hover:text-white md:mt-8"
          >
            <Link href="https://ig.me/m/mentoriamandytattoo" target="_blank">
              Quero ser aluno!
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex h-fit w-full flex-col pt-2 md:flex-row md:px-20 md:pt-20 xl:px-28">
        <div className="flex flex-1 flex-col space-y-4 p-8 text-justify">
          <h1 className="text-center text-[2.2em] font-bold md:text-left md:text-[2.6rem]">
            Quem é a <br />
            <span className="text-primary">sensei</span> ?
          </h1>
          <div className="relative block flex-1 md:hidden">
            <Image
              src={bioBackgroundImage}
              alt="Tatuadora Mandy com fundo rosa e seu nome escrito: Amanda Assunção"
              sizes="(min-width: 768px) 0vw, 100vw"
              placeholder="blur"
            />
          </div>
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

          <Button
            asChild
            className="h-16 w-64 border-2 bg-secondary p-4 text-[1.4rem] font-bold text-[#060606] transition duration-300 hover:bg-[#060606] hover:text-white"
          >
            <Link href="https://ig.me/m/mentoriamandytattoo" target="_blank">
              Entrar em contato
            </Link>
          </Button>
        </div>

        <div className="relative hidden flex-1 md:block">
          <Image
            src={bioBackgroundImage}
            alt="Tatuadora Mandy com fundo rosa e seu nome escrito: Amanda Assunção"
            sizes="(min-width: 768px) 50vw, 0vw"
            placeholder="blur"
          />
        </div>
      </div>

      <div className="h-fit w-full px-8 pt-4 md:flex md:px-24 md:pt-20">
        <div className="relative hidden flex-1 pb-60 pt-60 sm:block">
          <Image
            className="object-contain"
            src={pinkBackgroundImage}
            alt="Mandy tatuando"
            fill
            sizes="(min-width: 768px) 50vw, 0vw"
          />
        </div>

        <div className="flex flex-col md:flex-1 md:space-y-4 md:p-10">
          <h1 className="text-center text-[2.4rem] font-bold md:text-left md:text-[3rem]">
            Perguntas <span className="text-primary">frequentes</span>
          </h1>
          <div className="relative sm:hidden">
            <Image
              src={pinkBackgroundImage}
              alt="Mandy tatuando"
              sizes="(min-width: 768px) 0vw, 100vw"
            />
          </div>
          <Faq />
        </div>
      </div>

      <div className="relative mb-8 h-fit w-full text-center md:text-left">
        <div className="relative p-8 md:z-10 md:w-[50vw] md:p-4 md:pl-40 md:pt-16">
          <h1 className="mb-2 text-[2rem] font-bold md:mb-8 lg:text-[2.4rem] 2xl:text-[3.5rem]">
            Torne-se um <span className="text-secondary">tatuador</span>{' '}
            completo!
          </h1>
          <Image
            className="relative block md:hidden"
            src={gokuMoblieBackgroundImage}
            alt="Decalque de tatuagem do goku"
            sizes="(min-width: 768px) 0vw, 100vw"
          />
          <h3 className="text-[1rem] lg:text-[1.1rem] 2xl:text-[1.3rem]">
            Quero que você vá <b>muito além do básico</b>: Irei te ensinar
            técnicas modernas de tatuagem e marketing para que você possa
            construir uma identidade única, divulgar seu trabalho nas mídias
            sociais e se tornar um profissional reconhecido no mundo da
            tatuagem.
          </h3>
          <p className="mt-6 text-[1.3rem] italic lg:text-[1.3rem] 2xl:text-[1.5rem]">
            <b>Não perca mais tempo!</b> Garanta agora sua vaga e inicie sua
            jornada como um tatuador de sucesso.
          </p>
          <Button
            asChild
            variant="outline"
            className="mt-8 h-16 w-60 border-2 border-secondary p-4 text-[1.4rem] font-bold text-secondary transition duration-300 hover:bg-secondary hover:text-white md:mt-12"
          >
            <Link href="https://ig.me/m/mentoriamandytattoo" target="_blank">
              Quero ser tatuador!
            </Link>
          </Button>
        </div>
        <Image
          className="relative hidden object-cover pr-20 pt-12 md:flex"
          src={gokuBackgroundImage}
          alt="Decalque de tatuagem do goku"
          fill
          sizes="(min-width: 768px) 100vw, 0vw"
        />
      </div>
    </>
  )
}
