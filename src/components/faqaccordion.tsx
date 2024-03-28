import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const info = [
  {
    title: "Quais as formas de pagamento?",
    content:
      "Você pode pagar com cartão de crédito, com dois cartões diferentes, boleto, PIX, uma parte em PIX e outra com cartão, saldo na Hotmart e PayPal.",
  },
  {
    title: "Em quanto tempo terei acesso ?",
    content: "Logo apos a aprovação do pagamento ",
  },
  {
    title: "Por quanto tempo terei acesso ao curso?",
    content: "Curso possui validade vitalicia ",
  },
  {
    title: "Tem algum pré-requisito para participar?",
    content:
      "Você pode pagar com cartão de crédito, com dois cartões diferentes, boleto, PIX, uma parte em PIX e outra com cartão, saldo na Hotmart e PayPal.",
  },
];

export default function FaqAccordion() {
  return (
    <div>
      <Accordion
        className="AccordionRoot"
        type="single"
        defaultValue="item-1"
        collapsible
      >
        {info.map((data, index) => (
          <AccordionItem
            key={index}
            className="borda"
            value={`item-${index + 1}`}
          >
            <AccordionTrigger className="text-left text-base  font-bold sm:text-lg">
              {data.title}
            </AccordionTrigger>
            <AccordionContent>{data.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
