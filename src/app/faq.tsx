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
        <AccordionTrigger>
          Como faço para agendar minha tatuagem?
        </AccordionTrigger>
        <AccordionContent>
          O primeiro passo é solicitar o seu orçamento através do nosso
          whatsapp! Por lá, minha acessora Jess irá te auxiliar em tudo o que
          você precisar e retirar qualquer dúvida que venha a surgrir. Então,
          juntos, vocês escolherão o melhor dia disponível para realizar sua
          tatuagem. Para garantir sua vaga, é necessário o pagamento do sinal
          (entrada).
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          Eu não posso fazer o orçamento direto com a Mandy?
        </AccordionTrigger>
        <AccordionContent>
          Aqui no estúdio, a responsável pelo orçamento e agendamento é a Jess.
          Somente após o pagamento da entrada é que eu entrarei em contato para
          que possamos iniciar a arte da sua tattoo!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          Quanto tempo demora para a criação da arte?
        </AccordionTrigger>
        <AccordionContent>
          Faltando cerca de 5 dias para o dia do seu agendamento, eu entrarei em
          contato com você para que possamos iniciar a criação da arte. Durante
          esses dias, enviarei esboços e ideias para que você aprove. Até 24
          horas antes do grande dia, a arte final deverá estar aprovada.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Marquei minha tattoo, e agora?</AccordionTrigger>
        <AccordionContent>
          Segura a ansiedade! Enquanto o grande dia não chega, vá hidratando sua
          pele e bebendo bastante água. Ah, também evite pegar sol nesse tempo!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>
          É verdade que a Mandy só tatua braços e pernas?
        </AccordionTrigger>
        <AccordionContent>
          Em grande maioria, sim! Mas tudo pode ter sua exceção.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger>E após a tattoo, o que devo fazer?</AccordionTrigger>
        <AccordionContent>
          Quando finalizarmos a sua tattoo, irei te passar todos os cuidados
          necessários durante a fase de cicatrização. Mas não se preocupe! Não é
          nenhum bicho de sete cabeças. Os cuidados se resumem basicamente em
          lavar a tatuagem com sabonete líquido anti bacteriano, hidratar com o
          creme milk da Nivia, evitar pegar sol e tomar banho de piscina e mar
          nos próximos 30 dias. Bem tranquilo, ne? Mas qualquer dúvida,
          estaremos a disposição!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8">
        <AccordionTrigger>
          E se eu não tiver nenhuma ideia de tatuagem?
        </AccordionTrigger>
        <AccordionContent>
          No meu instagram sempre estou postando várias opções de artes que você
          pode escolher! Lembrando que cada tatuagem é única, então uma vez
          escolhida, não poderá ser feita por outra pessoa. Além disso, sempre
          rola algumas promoções por lá também! Então não deixe de me seguir!
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
