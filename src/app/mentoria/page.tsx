import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { Faq } from './faq'

export default function Mentoria() {
  return (
    <>
      <div className="relative flex h-fit w-full flex-col pb-10 md:flex-row md:pr-10">
        <div className="z-10 w-1/2 p-4 pl-[10vw] pt-[10vw]">
          <h1 className="mb-8 font-bold lg:text-[2rem] 2xl:text-[3.5rem]">
            Torne-se <span className="text-secondary">referência</span> no{' '}
            <span className="text-primary">mercado de tatuagem</span>.
          </h1>
          <h3 className="lg:text-[1.2rem] 2xl:text-[1.5rem]">
            Através da minha mentoria, você desenvolve a confiança e técnicas
            necessárias para se destacar e se tornar um tatuador requisitado.
          </h3>
          <p className="mt-6 italic lg:text-[1.2rem] 2xl:text-[1.5rem]">
            Eleve o seu nível profissional, inscreva-se já!
          </p>
          <Button
            asChild
            variant="outline"
            className="w-70 h-16 border-2 bg-secondary p-4 text-[1.4rem] font-bold text-[#060606] transition duration-300 hover:bg-[#060606] hover:text-white lg:mt-10 2xl:mt-20"
          >
            <Link href="https://ig.me/m/mentoriamandytattoo" target="_blank">
              Quero ser mentorado!
            </Link>
          </Button>
        </div>
        <div className="relative w-1/2 pr-60">
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

      <div className="h-fit w-full bg-[#E2E1DD]  px-[10vw] lg:pb-20 lg:pt-12 2xl:pt-20">
        <p className="text-justify text-[#060606] lg:text-[1.8rem] 2xl:pb-4 2xl:text-[2.4rem] ">
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
        <div className="lg:pt-10 2xl:pt-32">
          <h1 className="font-bold text-[#060606] lg:text-[1.8rem] 2xl:text-[2.8rem]">
            Você está no <span className="text-primary">lugar certo</span> se...
          </h1>
        </div>
      </div>

      <div className="flex h-fit w-full flex-col items-center bg-[#E2E1DD] pb-10">
        <div className="grid w-fit grid-cols-3 gap-x-4 gap-y-20 ">
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
              className={`relative h-60 w-72 rounded-lg bg-[#060606]`}
            >
              <div className="absolute left-1/2 top-[-45px] -translate-x-1/2 transform">
                <Image
                  src={`/${card.icone}`}
                  width={90}
                  height={90}
                  alt={`Ícone de Mentoria ${index + 1}`}
                />
              </div>
              <p className="px-8 pt-20 text-justify text-[1rem]">
                {card.texto}
              </p>
            </div>
          ))}
        </div>
        <div className="grid w-fit grid-cols-2 gap-x-4 gap-y-20 pt-20">
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
              className={`relative h-60 w-72 rounded-lg bg-[#060606]`}
            >
              <div className="absolute left-1/2 top-[-45px] -translate-x-1/2 transform">
                <Image
                  src={`/${card.icone}`}
                  width={90}
                  height={90}
                  alt={`Ícone de Mentoria ${index + 1}`}
                />
              </div>
              <p className="px-8 pt-20 text-justify text-[1rem]">
                {card.texto}
              </p>
            </div>
          ))}
        </div>
        <div>
          <Button
            asChild
            variant="outline"
            className="h-16 w-64 border-2 border-primary bg-[#E2E1DD] p-4 text-[1.4rem] font-bold text-primary transition duration-300 hover:bg-primary hover:text-white lg:mt-10 2xl:mt-20"
          >
            <Link href="https://ig.me/m/mentoriamandytattoo" target="_blank">
              Quero me inscrever!
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex h-fit w-full lg:px-28 lg:pt-10 2xl:px-52 2xl:pt-20">
        <div className="flex flex-1 flex-col space-y-4 p-8">
          <h1 className="font-bold lg:text-[2rem] 2xl:text-[3rem]">
            Prazer, sou a <span className="text-primary">Mandy</span> <br />e
            serei a sua <i>mentora</i>!
          </h1>
          <p className="pb-10 text-justify text-[#E2E1DD] lg:text-[1rem] 2xl:text-[1.2rem]">
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
            <br /> <br />
            <span className="font-bold text-secondary">
              Conheça mais do meu trabalho:{' '}
              <Link
                href="https://www.instagram.com/mentoriamandytattoo/"
                target="_blank"
              >
                @mentoriamandytattoo
              </Link>
            </span>
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
            className="h-screen object-contain"
            src="/mandy-bio-2.png"
            alt="Tatuadora Mandy com fundo rosa e seu nome escrito: Amanda Assunção"
            sizes="50vw"
            fill
          />
        </div>
      </div>

      <div className="flex h-fit w-full px-52 pt-20">
        <div className="flex flex-1 flex-col space-y-4 p-10">
          <h1 className="text-[3rem] font-bold">
            Perguntas <span className="text-primary">frequentes</span>
          </h1>
          <Faq />
        </div>
      </div>

      <div className="flex h-fit w-full bg-[#E2E1DD] pb-20 lg:px-28 lg:pt-10 2xl:px-52 2xl:pt-20">
        <div className="relative flex-1 pb-60 pt-60">
          <Image
            className="h-screen object-contain"
            src="/mandy-retrato-mentoria.jpeg"
            alt="Mandy tatuando"
            layout="fill"
            sizes="50vw"
          />
        </div>

        <div className="flex flex-1 flex-col space-y-4 p-10 text-[#060606]">
          <h1 className="mb-8 font-bold lg:text-[2.4rem] 2xl:text-[3rem]">
            É hora de se tornar o <span className="text-primary">tatuador</span>{' '}
            que você sempre sonhou!
          </h1>
          <p className="mt-6 pb-10 text-[1.5rem]">
            Eu sei, as vezes parece que não vai passar de um sonho.
            <br />
            <br />
            Mas acredite em mim: eu já estive no seu lugar e posso garantir que
            ser um <b>tatuador referência no mercado geek</b> é sim possível.
            <br />
            <br />
            Não tenha medo de <b>investir</b> em sua carreira.
            <br />
            <br />
            Dê o próximo passo para alcançar o <b>sucesso</b> que você merece.{' '}
            <i>Seja um mentorado!</i>
          </p>
          <Button
            asChild
            variant="outline"
            className="mt-40 h-16 w-72 border-2 border-primary bg-[#E2E1DD] p-4 text-[1.4rem] font-bold text-primary transition duration-300 hover:bg-primary hover:text-white"
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
