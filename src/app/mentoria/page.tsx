import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { Faq } from './faq'
import { Navbar } from '@/components/navbar'

export default function Mentoria() {
  return (
    <>
      <Navbar />
      <div className="flex h-fit w-full flex-col pb-10 md:relative md:flex-row md:pr-10">
        <div className="p-8 pt-[6vw] text-center md:z-10 md:w-1/2 md:pl-[10vw] md:text-left">
          <h1 className="mb-8 text-[2rem] font-bold lg:text-[2rem] 2xl:text-[3.5rem]">
            Torne-se <span className="text-secondary">referência</span> no{' '}
            <span className="text-primary">mercado de tatuagem</span>.
          </h1>
          <div className="relative md:hidden">
            <Image
              className="object-contain"
              src="/mandy-mentoria.png"
              alt="Banner redondo com foto da tatuadora Mandy e dois informativos: curso com 6 meses de assistência e com certificado digital"
              height={400}
              width={400}
            />
          </div>
          <h3 className="md:text-justify lg:text-[1.2rem] 2xl:text-[1.5rem]">
            Através da minha mentoria, você desenvolve a confiança e técnicas
            necessárias para se destacar e se tornar um tatuador requisitado.
          </h3>
          <p className="mt-6 pb-8 italic md:pb-8 lg:text-[1.2rem] 2xl:text-[1.5rem]">
            Eleve o seu nível profissional, inscreva-se já!
          </p>
          <Button
            asChild
            variant="outline"
            className="w-70 h-16 border-2 bg-secondary p-4 text-[1.4rem] font-bold text-[#060606] transition duration-300 hover:bg-[#060606] hover:text-white md:w-72 lg:mt-8"
          >
            <Link href="https://ig.me/m/mentoriamandytattoo" target="_blank">
              Quero ser mentorado!
            </Link>
          </Button>
        </div>
        <div className="relative hidden md:block md:w-1/2 md:pr-60">
          <Image
            className="h-screen object-contain"
            src="/mandy-mentoria.png"
            alt="Banner redondo com foto da tatuadora Mandy e dois informativos: curso com 6 meses de assistência e com certificado digital"
            sizes="50vw"
            fill
            priority
          />
        </div>
      </div>

      <div className="h-fit w-full bg-[#E2E1DD] px-[10vw]  pb-16 pt-8 md:pb-20 md:pt-8 lg:pb-20 lg:pt-12 2xl:pt-20">
        <p className="text-justify text-[#060606] lg:text-[1.8rem] 2xl:pb-4 2xl:text-[2.4rem]">
          Eu tenho como objetivo formar tatuadores especializados em{' '}
          <b>tatuagens geeks</b>, extremamente qualificados e reconhecidos por
          suas{' '}
          <span className="text-primary">técnicas e identidades únicas</span>.
        </p>
        <br />
        <p className="text-justify text-[#060606] lg:text-[1.4rem] 2xl:text-[1.8rem]">
          <i>
            <b>Você</b> também pode ser um deles.{' '}
          </i>
          <br />
          <br />
          Durante <b>4 semanas</b>, você irá aprimorar suas habilidades e
          aprender sobre o que há de mais moderno no mundo da tatuagem.
          <br />
          <br />
          Através de tarefas de prática de desenho, criação de artes, treinos
          diversos e tatuagem em pele humana, você irá desenvolver confiança em
          seu trabalho e dar mais um passo para alcançar a carreira dos sonhos.
          <br />
          <br />
          <b>E o melhor:</b> tudo sem precisar sair de casa.
        </p>
        <div className="pt-8 lg:pt-10">
          <h1 className="text-[1.6rem] font-bold text-[#060606] lg:text-[1.8rem] 2xl:text-[2.8rem]">
            Você está no <span className="text-primary">lugar certo</span> se...
          </h1>
        </div>
      </div>

      <div className="flex h-fit w-full flex-col items-center bg-[#E2E1DD] pb-10">
        <div className="w-fit sm:flex sm:flex-col md:grid md:grid-cols-3 md:gap-x-4 md:gap-y-20">
          {[
            {
              icone: 'icone-mentoria-1.png',
              texto:
                'Já atua como tatuador, mas quer melhorar suas técnicas e estar atualizado com o mercado atual.',
            },
            {
              icone: 'icone-mentoria-2.png',
              texto:
                'Quer ganhar confiança para atender seus clientes e manter sua agenda sempre lotada.',
            },
            {
              icone: 'icone-mentoria-3.png',
              texto:
                'Sente que ainda tem muito potencial inexplorado e sonha em se tornar referência em tatuagens geeks.',
            },
          ].map((card, index) => (
            <div
              key={index}
              className={`relative mb-8 h-60 w-72 rounded-lg bg-[#060606] md:h-44 md:w-48 lg:h-60 lg:w-72`}
            >
              <div className="absolute left-1/2 top-[-45px] -translate-x-1/2 transform">
                <Image
                  src={`/${card.icone}`}
                  width={90}
                  height={90}
                  alt={`Ícone de Mentoria ${index + 1}`}
                />
              </div>
              <p className="px-8 pt-20 text-justify text-[1rem] md:px-4 md:pt-14 md:text-[0.8rem] lg:px-8 lg:pt-20 lg:text-[1rem]">
                {card.texto}
              </p>
            </div>
          ))}
        </div>
        <div className="w-fit gap-x-4 gap-y-20 sm:flex sm:flex-col md:grid md:grid-cols-2 md:pt-20">
          {[
            {
              icone: 'icone-mentoria-4.png',
              texto:
                'Sabe da importância de ter um portfólio bem construído e uma presença digital forte.',
            },
            {
              icone: 'icone-mentoria-5.png',
              texto:
                'Busca uma mentoria personalizada que te leve além do básico e te ajude a se destacar no mercado.',
            },
          ].map((card, index) => (
            <div
              key={index}
              className={`relative mb-8 h-60 w-72 rounded-lg bg-[#060606] md:h-44 md:w-48 lg:h-60 lg:w-72`}
            >
              <div className="absolute left-1/2 top-[-45px] -translate-x-1/2 transform">
                <Image
                  src={`/${card.icone}`}
                  width={90}
                  height={90}
                  alt={`Ícone de Mentoria ${index + 1}`}
                />
              </div>
              <p className="px-8 pt-20 text-justify text-[1rem] md:px-4 md:pt-14 md:text-[0.8rem] lg:px-8 lg:pt-20 lg:text-[1rem]">
                {card.texto}
              </p>
            </div>
          ))}
        </div>
        <div>
          <Button
            asChild
            variant="outline"
            className="h-16 w-64 border-2 border-primary bg-[#E2E1DD] p-4 text-[1.4rem] font-bold text-primary transition duration-300 hover:bg-primary hover:text-white md:mt-8 lg:mt-10 2xl:mt-20"
          >
            <Link href="https://ig.me/m/mentoriamandytattoo" target="_blank">
              Quero me inscrever!
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex h-fit w-full flex-col md:flex-row lg:px-8 lg:pt-10 2xl:px-52 2xl:pt-20">
        <div className="flex flex-1 flex-col gap-2 space-y-4 p-8 text-justify md:gap-8">
          <h1 className="text-center text-[1.6rem] font-bold md:text-left md:text-[1.8rem] lg:text-[2rem] 2xl:text-[3rem]">
            Prazer, sou a <span className="text-primary">Mandy</span> <br />e
            serei a sua <i>mentora</i>!
          </h1>
          <div className="block md:hidden">
            <Image
              src="/mandy-bio-2.png"
              alt="Tatuadora Mandy com fundo rosa e seu nome escrito: Amanda Assunção"
              height={470}
              width={400}
            />
          </div>
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
          <p className="font-bold text-secondary">
            Conheça mais do meu trabalho:{' '}
            <Link
              href="https://www.instagram.com/mentoriamandytattoo/"
              target="_blank"
            >
              @mentoriamandytattoo
            </Link>
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

        <div className="hidden md:relative md:block md:flex-1">
          <Image
            className="h-screen object-contain"
            src="/mandy-bio-2.png"
            alt="Tatuadora Mandy com fundo rosa e seu nome escrito: Amanda Assunção"
            sizes="50vw"
            fill
          />
        </div>
      </div>

      <div className="flex h-fit w-full md:px-10 md:pt-10">
        <div className="flex flex-1 flex-col space-y-4 p-10">
          <h1 className="text-[3rem] font-bold">
            Perguntas <span className="text-primary">frequentes</span>
          </h1>
          <Faq />
        </div>
      </div>

      <div className="flex h-fit w-full flex-col bg-[#E2E1DD] pb-20 md:flex-row lg:px-28 lg:pt-10 2xl:px-52 2xl:pt-20">
        <div className="relative hidden pb-60 pt-60 md:block md:flex-1">
          <Image
            className="h-screen object-contain"
            src="/mandy-retrato-mentoria.jpeg"
            alt="Mandy tatuando"
            layout="fill"
            sizes="50vw"
          />
        </div>

        <div className="flex flex-1 flex-col  p-10 text-[#060606] md:space-y-4">
          <h1 className="text-center text-[1.8rem] font-bold md:mb-8 md:text-left md:text-[1.6rem] lg:text-[2rem] 2xl:text-[3rem]">
            É hora de se tornar o <span className="text-primary">tatuador</span>{' '}
            que você sempre sonhou!
          </h1>
          <div className="relative block pt-8 md:hidden">
            <Image
              src="/mandy-retrato-mentoria.jpeg"
              alt="Mandy tatuando"
              height={470}
              width={400}
            />
          </div>
          <div className="mt-6 flex flex-col gap-4 pb-8 text-justify md:gap-8 md:pb-10 md:text-[1rem] lg:text-[1.5rem]">
            <p>Eu sei, as vezes parece que não vai passar de um sonho.</p>
            <p>
              Mas acredite em mim: eu já estive no seu lugar e posso garantir
              que ser um <b>tatuador referência no mercado geek</b> é sim
              possível.
            </p>
            <p>
              Não tenha medo de <b>investir</b> em sua carreira.
            </p>
            <p>
              Dê o próximo passo para alcançar o <b>sucesso</b> que você merece.{' '}
              <i>Seja um mentorado!</i>
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="mt-4 h-16 w-72 border-2 border-primary bg-[#E2E1DD] p-4 text-[1.4rem] font-bold text-primary transition duration-300 hover:bg-primary hover:text-white md:mt-40"
          >
            <Link href="https://ig.me/m/mentoriamandytattoo" target="_blank">
              Quero ser mentorado!
            </Link>
          </Button>
        </div>
      </div>
    </>
  )
}
