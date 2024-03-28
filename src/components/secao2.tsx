import AccordionSection from "./accordionSection";
import Bonus from "./bonus";
import CarouselSecao2 from "./carousel-secao2";

export default function Secao2() {
  return (
    <div className="bg-bg2  justify-center  bg-right-top bg-no-repeat pt-12 md:bg-top md:pb-14">
      <div className="container w-full max-w-7xl">
        <p className="text-center text-lg font-bold md:text-3xl lg:mt-12 lg:text-4xl">
          O QUE VOCE IRA APRENDER
        </p>
        <div className="lg:mt-16 lg:justify-between xl:flex">
          <div className="xl:w-[500px]">
            <CarouselSecao2 />
          </div>
          <AccordionSection />
        </div>
        <Bonus />
      </div>
    </div>
  );
}
