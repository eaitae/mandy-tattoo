import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Slider } from './slider'
import { Faq } from './faq'
import Link from 'next/link'

export default function CursoPage() {
  return (
    <>
      <div className="relative h-screen w-full">
        <div className="relative z-10 w-[50vw] p-4 pl-40 pt-40">
          <h1 className="mb-8 text-[3.5rem] font-bold">
            Sua jornada como <span className="text-secondary">tatuador</span>{' '}
            começa aqui.{' '}
          </h1>
          <h3 className="text-[1.5rem]">
            Aprenda tudo o que você precisa para iniciar no mercado da tatuagem
            e se tornar um profissional requisitado e de alto nível.
          </h3>
          <p className="mt-6 text-[1.2rem] italic">
            Com o meu curso intensivo e atualizado, você se tornará o tatuador
            que sempre sonhou!
          </p>
          <Button
            asChild
            variant="outline"
            className="mt-20 h-16 w-60 border-2 border-secondary p-4 text-[1.4rem] font-bold text-secondary transition duration-300 hover:bg-secondary hover:text-white"
          >
            <Link href="https://ig.me/m/mentoriamandytattoo" target="_blank">
              Quero ser tatuador!
            </Link>
          </Button>
        </div>
        <Image
          className="relative h-screen w-full object-cover"
          src="/mandy-pink-ink-background.png"
          alt="Tatuadora Mandy segurando uma máquina de tatuagem"
          fill
          sizes="100vw"
          priority
        />
      </div>

      <div className="relative h-screen w-full">
        <div className="flex justify-center space-x-4 px-40">
          <div className="flex h-full flex-col items-center justify-center p-20">
            <Image
              src="/icone-ink.png"
              alt="Desenho de três bisnagas de tinta para tatuagem"
              className="mb-4"
              width={150}
              height={150}
            />
            <h2 className="mb-2 text-center text-[2rem] font-bold">
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

          <div className="flex h-full flex-col items-center justify-center p-20">
            <Image
              src="/icone-dragon.png"
              alt="Desenho de um dragão"
              className="mb-4"
              width={150}
              height={150}
            />
            <h2 className="mb-2 text-center text-[2rem] font-bold">
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

          <div className="flex h-full flex-col items-center justify-center p-20">
            <Image
              src="/icone-maquina.png"
              alt="Desenho de uma máquina de tatuagem"
              className="mb-4"
              width={150}
              height={150}
            />
            <h2 className="mb-2 text-center text-[2rem] font-bold">
              Receba seu certificado
            </h2>
            <p className="pt-6 text-center">
              Depois dos 6 módulos concluídos, você receberá seu certificado
              digital!
              <br />
              <br />E então é só começar a por em prática e se tornar um
              tatuador de sucesso.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-4 p-4">
          <Image
            src="/icone-bonus.png"
            alt="Icone de um presente"
            className="mb-4"
            width={150}
            height={150}
          />
          <h2 className="pl-8 text-[2rem] font-bold">
            Bônus <br />
            <span className="text-primary">exclusivo</span>:
          </h2>
          <p className="max-w-sm pl-4">
            Tenha acesso ao meu Whatsapp pessoal para assistência online durante
            2 meses. Tire todas suas dúvidas e receba auxílio para por em
            prática tudo que foi apresentado durante o curso!
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <Button
            asChild
            variant="outline"
            className="mt-20 h-16 w-64 border-2 border-secondary p-4 text-[1.4rem] font-bold text-secondary transition duration-300 hover:bg-secondary hover:text-white"
          >
            <Link href="https://ig.me/m/mentoriamandytattoo" target="_blank">
              Quero esse bônus!
            </Link>
          </Button>
        </div>
        <Image
          className="relative -z-10 h-screen w-full object-cover"
          src="/pontinhos-bg.png"
          alt="Pontinhos verdes"
          fill
          sizes="100vw"
        />
      </div>

      <div className="relative h-screen w-full">
        <div className="relative z-10 w-[50vw] p-4 pl-40 pt-40">
          <h1 className="mb-8 text-[3.5rem] font-bold">
            Se <span className="text-secondary">você</span>...
          </h1>
          <ul className="list-disc pl-6 text-[1.2rem]">
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
          <p className="mt-6 pt-4 text-[1.5rem]">
            Então este é o curso{' '}
            <span className="text-secondary">perfeito para você</span>!
          </p>
          <Button
            asChild
            variant="outline"
            className="mt-20 h-16 w-64 border-2 border-primary p-4 text-[1.4rem] font-bold text-primary transition duration-300 hover:bg-primary hover:text-white"
          >
            <Link href="https://ig.me/m/mentoriamandytattoo" target="_blank">
              Quero me inscrever!
            </Link>
          </Button>
        </div>
        <Image
          className="relative h-screen w-full object-cover"
          src="/mandy-green-ink-background.png"
          alt="Tatuadora Mandy criando uma arte em seu tablet"
          fill
          sizes="100vw"
        />
      </div>

      <div className="flex flex-col items-center justify-center space-y-8 p-8">
        <h1 className="mx-72 px-60 text-center text-[2.5rem] font-bold">
          Esses são alguns dos <span className="text-primary">resultados</span>{' '}
          dos meus alunos durante nosso curso:
        </h1>

        <Slider />

        <p className="mt-6 max-w-md pt-4 text-center text-[1.2rem]">
          Você também pode alcançar um resultado como esse, mesmo sem nunca ter
          tatuado antes!
        </p>

        <div className="flex justify-center space-x-4">
          <Button
            asChild
            variant="outline"
            className="mt-10 h-16 w-64 border-2 border-secondary p-4 text-[1.4rem] font-bold text-secondary transition duration-300 hover:bg-secondary hover:text-white"
          >
            <Link href="https://ig.me/m/mentoriamandytattoo" target="_blank">
              Quero ser aluno!
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex h-screen w-full px-52 pt-20">
        <div className="flex flex-1 flex-col space-y-4 p-8">
          <h1 className="text-[3rem] font-bold">
            Quem é a <br />
            <span className="text-primary">sensei</span> ?
          </h1>
          <p className="pb-10 text-justify text-[1.2rem] text-[#E2E1DD]">
            Prazer, <i>Mandy</i>!
            <br /> <br />
            Eu sempre gostei de desenhar, desde criança. Com o tempo, a tinta no
            papel se transformou em tinta na pele, e há 5 anos, encontrei o que
            gosto de fazer: tatuar. Hoje, depois de muita dedicação, sou
            referência no nicho de tatuagens de anime e temática oriental.
            <br /> <br />
            Com mais de 16 mil seguidores no Instagram, minha arte transcende
            fronteiras: fui chamada para ser tatuadora convidada na Europa,
            marcando minha presença em cidades icônicas como Londres e Berlim.
            <br /> <br />
            Para mim, cada pessoa é única, e cada tatuagem também deve ser. Todo
            trabalho é uma oportunidade de criar algo exclusivo, pensado e
            desenhado especificamente para cada cliente.
            <br /> <br />
            Atualmente, eu também dedico parte do meu tempo ensinando técnicas
            modernas de tatuagem em cursos e mentorias. Meu objetivo? Formar
            tatuadores profissionais e qualificados, garantindo que nossa
            profissão esteja em boas mãos.
          </p>

          <Button
            asChild
            className=" h-16 w-64 border-2 bg-secondary p-4 text-[1.4rem] font-bold text-[#060606] transition duration-300 hover:bg-[#060606] hover:text-white"
          >
            <Link href="https://ig.me/m/mentoriamandytattoo" target="_blank">
              Entrar em contato
            </Link>
          </Button>
        </div>

        <div className="relative flex-1">
          <Image
            src="/mandy-bio-1.png"
            alt="Tatuadora Mandy com fundo rosa e seu nome escrito: Amanda Assunção"
            layout="fill"
            objectFit="scale-down"
          />
        </div>
      </div>

      <div className="flex h-fit w-full px-52 pt-20">
        <div className="relative flex-1 pb-60 pt-60">
          <Image
            src="/mandy-pink-bg.png"
            alt="Mandy tatuando"
            layout="fill"
            objectFit="scale-down"
          />
        </div>

        <div className="flex flex-1 flex-col space-y-4 p-10">
          <h1 className="text-[3rem] font-bold">
            Perguntas <span className="text-primary">frequentes</span>
          </h1>
          <Faq />
        </div>
      </div>

      <div className="relative h-screen w-full">
        <div className="relative z-10 w-[50vw] p-4 pl-40 pt-40">
          <h1 className="mb-8 text-[3.5rem] font-bold">
            Torne-se um <span className="text-secondary">tatuador</span>{' '}
            completo!
          </h1>
          <h3 className="text-[1.3rem]">
            Quero que você vá <b>muito além do básico</b>: Irei te ensinar
            técnicas modernas de tatuagem e marketing para que você possa
            construir uma identidade única, divulgar seu trabalho nas mídias
            sociais e se tornar um profissional reconhecido no mundo da
            tatuagem.
          </h3>
          <p className="mt-6 text-[1.5rem] italic">
            <b>Não perca mais tempo!</b> Garanta agora sua vaga e inicie sua
            jornada como um tatuador de sucesso.
          </p>
          <Button
            asChild
            variant="outline"
            className="mt-20 h-16 w-60 border-2 border-secondary p-4 text-[1.4rem] font-bold text-secondary transition duration-300 hover:bg-secondary hover:text-white"
          >
            <Link href="https://ig.me/m/mentoriamandytattoo" target="_blank">
              Quero ser tatuador!
            </Link>
          </Button>
        </div>
        <Image
          className="relative h-screen w-full object-cover pr-20"
          src="/decalque-goku.png"
          alt="Decalque de tatuagem do goku"
          fill
          sizes="100vw"
        />
      </div>
    </>
  )
}
