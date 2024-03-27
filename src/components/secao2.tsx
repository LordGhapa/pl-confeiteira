import AccordionSection from "./accordionSection";
import CarouselSecao2 from "./carousel-secao2";

export default function Secao2() {
  return (
    <div className="bg-bg2 justify-center bg-right bg-no-repeat py-14 md:bg-center">
      <div className="container w-full max-w-7xl">
        <p className="text-center text-lg font-bold md:text-2xl lg:text-4xl">
          O QUE VOCE IRA APRENDER
        </p>
        <div className="lg:mt-16 lg:justify-between xl:flex">
          <div className="xl:w-[500px]">
            <CarouselSecao2 />
          </div>
          <AccordionSection />
        </div>
      </div>
    </div>
  );
}
