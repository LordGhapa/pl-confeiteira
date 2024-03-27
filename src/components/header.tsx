import Image from "next/image";
import { Button } from "./ui/button";
import CardHeader from "./card-header";

export default function Header() {
  return (
    <header className="ajuste  lg:bg-herolg flex max-h-fit min-h-screen flex-col  justify-center bg-hero bg-cover py-6 md:bg-transparent md:py-8 lg:m-0 lg:max-h-fit  lg:min-h-[600px] lg:bg-top lg:p-0 2xl:min-h-[600px]  ">
      <div className="self-center lg:w-full lg:max-w-7xl">
        <div className="container relative px-0 lg:m-0  lg:max-w-[500px]">
          <div className="px-5  text-center lg:text-left">
            <h1 className=" mb-2 rounded-lg  bg-white/10 text-base font-bold backdrop-blur-3xl md:bg-transparent md:text-3xl md:backdrop-blur-none">
              SEJA UMA{" "}
              <span className="text-primary"> CONFEITEIRA DE SUCESSO</span>{" "}
              COMEÇANDO DO ZERO
            </h1>
            <p className="text-xs md:text-lg">
              VEJA COMO SE PREPARAR E TER UMA CARREIRA QUE PODE MUDAR A SUA VIDA
            </p>
          </div>

          {/*  */}
          <div className="hero-mobile  relative mx-auto -mb-4 h-[310px]   max-w-full flex-1 px-4 md:w-[450px] lg:hidden ">
            <Image
              src={"/mulher.png"}
              alt="mulher segurando um bolo"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/*  */}
          <div className="px-5">
            <Button className=" relative z-10 w-full transition-all ease-in-out hover:scale-105 md:p-8 md:text-3xl lg:p-4 lg:text-lg">
              QUERO ME INSCREVER AGORA
            </Button>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="container px-5 lg:absolute lg:top-[510px] lg:mx-auto lg:w-[725px] lg:self-center">
        <CardHeader />
      </div>
    </header>
  );
}
