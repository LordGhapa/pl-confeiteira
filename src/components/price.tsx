import Image from "next/image";
import { Button } from "./ui/button";

export default function Price() {
  return (
    <div className="  bg-pricebg secao_preço flex items-center justify-center bg-left py-12 lg:min-h-[937px]">
      <div className="container flex justify-center px-3">
        <div className="cta relative flex w-[740px] flex-col items-center justify-center overflow-hidden rounded-2xl bg-white py-12 pt-16  md:h-[621px] lg:px-20 lg:py-24">
          <div className="discount absolute -right-20 top-10 w-44  bg-black   text-center text-lg font-bold text-[#fff500] lg:top-12 lg:py-1  lg:text-2xl">
            20% OFF
          </div>
          <p className=" mb-2 text-lg font-bold md:mb-12 md:text-4xl">
            Aproveite o Valor Promocional
          </p>
          {/*  */}
          <div className="flex flex-col items-center font-bold">
            <p className=" text-lg md:text-3xl">
              De:{" "}
              <span className="font-normal text-red-500 line-through ">
                R$ 621.25
              </span>
            </p>
            <p className=" flex items-center text-5xl md:text-8xl ">
              <span className="text-3xl md:text-[40px]">12x</span>
              R$ 41
              <span className="text-3xl  md:text-[40px]">,99</span>
            </p>
            <p className="text-2xl font-normal">ou à Vista por R$ 497</p>
          </div>
          {/*  */}
          <div className="BUTTON mt-4 md:mt-8">
            <Button className="bg-[#1a1a1a] p-4 text-base font-bold transition-all delay-300 ease-in-out hover:scale-110 sm:p-8 lg:w-[520px]">
              QUERO GARANTIR MINHA VAGA
            </Button>
            <p className="mt-4 flex flex-col items-center text-xs font-bold sm:flex-row sm:justify-between lg:text-base">
              <span className="flex gap-1">
                <Image
                  alt="confirmed icon "
                  src={"/yes.svg"}
                  width={16}
                  height={16}
                />
                Compra via Hotmart
              </span>
              <span className="flex gap-1">
                <Image
                  alt="confirmed icon "
                  src={"/lock.svg"}
                  width={16}
                  height={16}
                />
                Ambiente 100% Seguro
              </span>
            </p>
          </div>
          <p className="mt-8 text-center text-lg font-bold lg:text-2xl">
            AS VAGAS SÃO LIMITADAS!
          </p>
        </div>
      </div>
    </div>
  );
}
