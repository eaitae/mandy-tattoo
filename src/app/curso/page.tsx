import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function CursoPage() {
  return (
    <>
      <div className="relative h-screen w-screen bg-[#060606]">
        <div className="relative z-10 w-[50vw] p-4 pl-40 pt-40">
          <h1 className="mb-8 text-[3.5rem] font-bold">
            Sua jornada como <span className="text-[#CEE130]">tatuador</span>{' '}
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
            variant="outline"
            className="mt-20 h-16 w-60 border-2 border-[#CEE130] p-4 text-[1.4rem] font-bold text-[#CEE130] transition duration-300 hover:bg-[#CEE130] hover:text-white"
          >
            {' '}
            Quero ser tatuador!{' '}
          </Button>
        </div>
        <Image
          className="relative h-screen w-screen object-cover"
          src="/mandy-pink-ink-background.png"
          alt="Tatuadora Mandy segurando uma máquina de tatuagem"
          fill
          sizes="100vw"
          priority
        />
      </div>

      <div className="relative h-screen w-screen bg-[#060606]">
        <div className="flex justify-center space-x-4 bg-[#060606] px-40">
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
            <span className="text-[#D048CD]">exclusivo</span>:
          </h2>
          <p className="max-w-sm pl-4">
            Tenha acesso ao meu Whatsapp pessoal para assistência online durante
            2 meses. Tire todas suas dúvidas e receba auxílio para por em
            prática tudo que foi apresentado durante o curso!
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <Button
            variant="outline"
            className="mt-20 h-16 w-64 border-2 border-[#CEE130] p-4 text-[1.4rem] font-bold text-[#CEE130] transition duration-300 hover:bg-[#CEE130] hover:text-white"
          >
            {' '}
            Quero esse bônus!{' '}
          </Button>
        </div>
        <Image
          className="relative -z-10 h-screen w-screen object-cover"
          src="/pontinhos-bg.png"
          alt="Pontinhos verdes"
          fill
          sizes="100vw"
        />
      </div>

      <div className="relative h-screen w-screen bg-[#060606]">
        <div className="relative z-10 w-[50vw] p-4 pl-40 pt-40">
          <h1 className="mb-8 text-[3.5rem] font-bold">
            Se <span className="text-[#CEE130]">você</span>...
          </h1>
          <ul className="list-disc pl-6 text-[1.2rem]">
            <li>Sonha em ser tatuador, mas não sabe como começar</li>
            <br />
            <li>
              Não sabe qual profissão seguir, mas gosta de tatuagem e quer se
              tornar independente através do próprio trabalho{' '}
            </li>
            <br />
            <li>
              Tem noção básica de desenho e quer dar o primeiro passo para uma
              carreira de sucesso{' '}
            </li>
            <br />
            <li>
              Está iniciando na área, mas não se sente confiante em tatuar em
              pele humana e divulgar seus trabalhos
            </li>
          </ul>
          <p className="mt-6 pt-4 text-[1.5rem]">
            Então este é o curso{' '}
            <span className="text-[#CEE130]">perfeito para você</span>!
          </p>
          <Button
            variant="outline"
            className="mt-20 h-16 w-64 border-2 border-[#D048CD] p-4 text-[1.4rem] font-bold text-[#D048CD] transition duration-300 hover:bg-[#D048CD] hover:text-white"
          >
            {' '}
            Quero me inscrever!{' '}
          </Button>
        </div>
        <Image
          className="relative h-screen w-screen object-cover"
          src="/mandy-green-ink-background.png"
          alt="Tatuadora Mandy criando uma arte em seu tablet"
          fill
          sizes="100vw"
        />
      </div>

      <div className="relative h-screen w-screen bg-[#060606]">
        <div className="relative z-10 w-[50vw] p-4 pl-40 pt-40">
          <h1 className="mb-8 text-[3.5rem] font-bold">
            Torne-se um <span className="text-[#CEE130]">tatuador</span>{' '}
            completo!{' '}
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
            variant="outline"
            className="mt-20 h-16 w-60 border-2 border-[#CEE130] p-4 text-[1.4rem] font-bold text-[#CEE130] transition duration-300 hover:bg-[#CEE130] hover:text-white"
          >
            {' '}
            Quero ser tatuador!{' '}
          </Button>
        </div>
        <Image
          className="relative h-screen w-screen object-cover pr-20"
          src="/decalque-goku.png"
          alt="Decalque de tatuagem do goku"
          fill
          sizes="100vw"
        />
      </div>
    </>
  )
}
