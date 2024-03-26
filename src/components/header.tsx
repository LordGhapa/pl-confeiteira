import Image from "next/image";
import { Button } from "./ui/button";
import CardHeader from "./card-header";

export default function Header() {
  return (
    <header className="ajuste lg:bg-herolg flex h-screen flex-col justify-center bg-hero bg-cover py-6 md:py-8 lg:h-[600px]">
      <div className="container px-5 text-center">
        <h1 className=" mb-2 rounded-lg  bg-white/10  text-base font-bold backdrop-blur-3xl md:text-4xl">
          SEJA UMA <span className="text-primary"> CONFEITEIRA DE SUCESSO</span>{" "}
          COMEÇANDO DO ZERO
        </h1>
        <p className="text-xs md:text-lg">
          VEJA COMO SE PREPARAR E TER UMA CARREIRA QUE PODE MUDAR A SUA VIDA
        </p>
      </div>
      <div className="hero-mobile relative mx-auto -mb-4 h-[310px] w-[768px] max-w-full flex-1 px-4 md:w-[450px] lg:hidden">
        <Image
          src={"/mulher.png"}
          alt="mulher segurando um bolo"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className=" container">
        <Button className="relative z-10 w-full md:p-8 md:text-4xl">
          QUERO ME INSCREVER AGORA
        </Button>
      </div>

      <div className="container">
        <CardHeader />
      </div>
    </header>
  );
}
