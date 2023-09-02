import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function Faq() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-justify">
          Só tem mentoria online?
        </AccordionTrigger>
        <AccordionContent>
          Sim, a ideia é realizar uma mentoria descomplicada e que se encaixe na
          vida corrida que levamos hoje em dia, tendo horários flexivéis e
          contando com uma comunicação respeitosa dentro do tempo de cada um.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-justify">
          O que eu vou aprender durante a mentoria?
        </AccordionTrigger>
        <AccordionContent>
          O programa da mentoria é montado pensado em cada aluno, então todas as
          tarefas e tópicos estudados serão escolhidos de acordo com as suas
          habilidades e necessidades atuais. Os tópicos podem incluir: prática
          de desenho, criação de artes para tatuagem, treino de técnicas em pele
          artificial e execução de tatuagem na pele humana.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-justify">
          É preciso ter experência prévia com tatuagem?
        </AccordionTrigger>
        <AccordionContent>
          Sim, para a mentoria recomendamos que o aluno já tatue em pele humana
          e possua o conhecimento e materiais básicos para tatuar. Caso você não
          tenha experiência e esteja procurando a melhor forma de iniciar no
          mundo da tatuagem, recomendo o meu curso para iniciantes!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-justify">
          Como funciona a mentoria?
        </AccordionTrigger>
        <AccordionContent>
          Toda semana serão passadas atividades para que o aluno apresente no
          prazo de 7 dias. As atividades serão avaliadas e fornecerei feedback.
          Durante todo o processo, estarei disponível para tirar dúvidas e te
          guiar passo a passo para que no final da mentoria você esteja 100%
          confiante no seu trabalho e pronto para levar sua carreira para o
          próximo nível!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger className="text-justify">
          Como funciona a assistência online após a mentoria?
        </AccordionTrigger>
        <AccordionContent>
          A assistência é feita pelo Whatsapp, onde você poderá tirar qualquer
          dúvida que tenha no período de 6 meses. Sejam dúvidas técnicas, sobre
          divulgação do seu trabalho, feedbacks. Estarei aqui para te ajudar no
          que você precisar!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger className="text-justify">
          Como funciona a inscrição?
        </AccordionTrigger>
        <AccordionContent>
          A inscrição é feita diretamente comigo através do instagram! Ao clicar
          em qualquer um dos botões, você será redirecionado para a minha caixa
          de mensagens, então é só me mandar um oi e dizer que está interessado
          na mentoria que eu irei te explicar tudo que precisa saber!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8">
        <AccordionTrigger className="text-justify">
          Por que quando clico para me inscrever, sou direcionado a DM do
          instagram?
        </AccordionTrigger>
        <AccordionContent>
          As inscrições são realizadas diretamente comigo, por isso você é
          direcionado à minha caixa de mensagens!
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
