import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const info = [
  {
    title: "Modulo 01: Materiais Básicos",
    content: "Lorem Ipsum",
  },
  {
    title: "Modulo 02: Entendendo Medidas",
    content: "Lorem Ipsum",
  },
  {
    title: "Modulo 03: Como Usar os Equipamentos",
    content: "Lorem Ipsum",
  },
  {
    title: "Modulo 04: Como Fazer uma boa Massa",
    content: "Lorem Ipsum",
  },
  {
    title: "Modulo 05: Recheios",
    content: "Lorem Ipsum",
  },
  {
    title: "Modulo 06: Coberturas",
    content: "Lorem Ipsum",
  },
  {
    title: "Modulo 07: Modelagem",
    content: "Lorem Ipsum",
  },
  {
    title: "Modulo 08: Apresentação",
    content: "Lorem Ipsum",
  },
  {
    title: "Modulo 09: Fazendo Vários Sabores Diferentes",
    content: "Lorem Ipsum",
  },
];

export default function AccordionSection() {
  return (
    <div>
      <Accordion
        className="AccordionRoot"
        type="single"
        defaultValue="item-1"
        collapsible
      >
        {info.map((data, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger className="text-left text-base font-bold">
              {data.title}
            </AccordionTrigger>
            <AccordionContent>{data.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
