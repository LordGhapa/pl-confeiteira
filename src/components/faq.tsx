import FaqAccordion from "./faqaccordion";

export default function Faq() {
  return (
    <div className="container w-full max-w-7xl py-24">
      <p className="mb-12 text-center text-4xl font-bold">
        Perguntas Frequentes
      </p>
      <FaqAccordion />
    </div>
  );
}
