import Image from "next/image";
import { Button } from "./ui/button";

export default function Price() {
  return (
    <div className="  bg-pricebg secao_preço flex min-h-[937px] items-center justify-center bg-left">
      <div className="container  flex justify-center">
        <div className="cta relative flex h-[621px] w-[740px] flex-col items-center justify-center overflow-hidden rounded-2xl bg-white px-20 py-24">
          <div className="discount absolute -right-20 top-12 w-44   bg-black py-1 text-center text-2xl font-bold  text-[#fff500]">
            20% OFF
          </div>
          <p className="mb-12 text-4xl font-bold">
            Aproveite o Valor Promocional
          </p>
          {/*  */}
          <div className="flex flex-col items-center font-bold">
            <p className="m-0 p-0 text-3xl">
              De:{" "}
              <span className="font-normal text-red-500 line-through ">
                R$ 621.25
              </span>
            </p>
            <p className=" flex items-center text-8xl ">
              <span className="text-[40px]">12x</span>
              R$ 41
              <span className="text-[40px]">,99</span>
            </p>
            <p className="text-2xl font-normal">ou à Vista por R$ 497</p>
          </div>
          {/*  */}
          <div className="BUTTON mt-8">
            <Button className="w-[520px] bg-[#1a1a1a] p-8 text-base font-bold transition-all delay-300 ease-in-out hover:scale-110">
              QUERO GARANTIR MINHA VAGA
            </Button>
            <p className="mt-4 flex justify-between font-bold">
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
          <p className="mt-8 text-center text-2xl font-bold">
            AS VAGAS SÃO LIMITADAS!
          </p>
        </div>
      </div>
    </div>
  );
}
