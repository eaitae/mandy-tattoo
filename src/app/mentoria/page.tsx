import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export default function Mentoria() {
  return (
    <>
      <div className="relative flex h-screen w-full pr-10">
        <div className="z-10 w-1/2 p-4 pl-40 pt-40">
          <h1 className="mb-8 text-[3.5rem] font-bold">
            Torne-se <span className="text-secondary">referência</span> no{' '}
            <span className="text-primary">mercado de tatuagem</span>.
          </h1>
          <h3 className="text-[1.5rem]">
            Através da minha mentoria, você desenvolve a confiança e técnicas
            necessárias para se destacar e se tornar um tatuador requisitado.
          </h3>
          <p className="mt-6 text-[1.5rem] italic">
            Eleve o seu nível profissional, inscreva-se já!
          </p>
          <Button
            asChild
            variant="outline"
            className="w-70 mt-20 h-16 border-2 bg-secondary p-4 text-[1.4rem] font-bold text-[#060606] transition duration-300 hover:bg-[#060606] hover:text-white"
          >
            <Link href="https://ig.me/m/mentoriamandytattoo" target="_blank">
              Quero ser mentorado!
            </Link>
          </Button>
        </div>
        <div className="relative w-1/2 pr-60">
          <Image
            className="h-screen object-cover"
            src="/mandy-mentoria.png"
            alt="Banner redondo com foto da tatuadora Mandy e dois informativos: curso com 6 meses de assistência e com certificado digital"
            sizes="50vw"
            fill
            priority
          />
        </div>
      </div>

      <div className="h-screen w-full bg-[#E2E1DD]  px-40 pt-20">
        <p className="text-justify text-[2.4rem] text-[#060606]">
          Eu tenho como objetivo formar tatuadores especializados em{' '}
          <b>tatuagens geeks</b>, extremamente qualificados e reconhecidos por
          suas{' '}
          <span className="text-primary">técnicas e identidades únicas</span>.
        </p>
        <br />
        <br />
        <p className="text-justify text-[1.8rem] text-[#060606]">
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
        <div className="pt-20">
          <h1 className="mb-8 text-[2.8rem] font-bold text-[#060606]">
            Você está no <span className="text-primary">lugar certo</span> se...
          </h1>
        </div>
      </div>
    </>
  )
}
