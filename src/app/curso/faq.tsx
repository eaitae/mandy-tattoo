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
          O curso é presencial?
        </AccordionTrigger>
        <AccordionContent>
          Sim, realizamos o curso no meu estúdio em Águas Claras - Brasília, DF.
          Estamos localizados ao lado da estação de metrô Águas Claras e
          próximos aos pontos de ônibus, sendo de fácil acesso! Pesquisando no
          Google Maps ou Uber por Mandy Tattoo você encontra a nossa
          localização.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-justify">
          São quantos dias de curso?
        </AccordionTrigger>
        <AccordionContent>
          São 2 dias consecutivos a escolha do aluno! Começamos as 9 horas e
          finalizamos por volta das 20 horas. Lembrando que o curso é intensivo
          e focando na construção de um profissional com conhecimento tanto
          técnico quanto prático e criativo da profissão; trazendo conhecimentos
          em marketing para divulgar seu trabalho, e dicas para desenvolver uma
          identidade criativa e se destacar na sua área de atuação.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-justify">
          É preciso ter experência prévia com tatuagem?
        </AccordionTrigger>
        <AccordionContent>
          Não, apenas recomendamos que você tenha noção básica de desenho, e
          claro, muita vontade e dedicação para aprender.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-justify">
          Os materiais são fornecidos ou preciso comprar?
        </AccordionTrigger>
        <AccordionContent>
          Todos os materiais utilizados para realização prática são fornecidos
          por mim, então não se preocupe se ainda não conseguiu investir em
          maquininha ou tintas. A única coisa que peço é que no dia traga um
          caderno para anotações e uma garrafinha de água!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="text-justify">
          Em quem vou tatuar?
        </AccordionTrigger>
        <AccordionContent>
          Cada aluno deve trazer uma pessoa voluntária no segundo dia de curso
          para que possamos realizar 3 tatuagens em pele humana. Recomendo que
          chame alguém de confiança e que te apoie nessa jornada! Caso tenha
          dificuldade em encontrar um voluntário, pode falar comigo que irei te
          ajudar!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger className="text-justify">
          Como funciona a assistência online após o curso?
        </AccordionTrigger>
        <AccordionContent>
          A assistência é feita pelo Whatsapp, onde você poderá tirar qualquer
          dúvida que tenha no período de 2 meses. Sejam dúvidas técnicas, sobre
          divulgação do seu trabalho, feedbacks. Estarei aqui para te acompanhar
          e impulsionar no começo da sua jornada!
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
          no curso que eu irei te explicar tudo que precisa saber!
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
