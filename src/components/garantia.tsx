import Image from "next/image";

export default function Garantia() {
  return (
    <div>
      <div className="container flex w-full max-w-7xl flex-col items-center justify-center gap-4  py-20 lg:flex-row lg:justify-between lg:gap-12">
        <div className="relative flex  flex-col lg:min-w-[550px]  lg:flex-row lg:items-center lg:gap-1">
          <div className="relative h-52 lg:h-52 lg:w-52">
            <Image
              src={"/selo-1.png"}
              alt="selo garantia 7 dias"
              fill
              className="object-contain"
            />
          </div>
          <p className="relative text-xl font-bold">
            Garantia incondicional de 7 dias
          </p>
        </div>
        <div className="md:text-center lg:text-left ">
          <p>
            Você tem, por lei, o direito de testar o produto durante 7 dias. Se
            dentro desse período você achar que o curso não é pra você, basta
            enviar um e-mail para contato@mail.com para solicitar o reembolso.
          </p>
        </div>
      </div>
    </div>
  );
}
