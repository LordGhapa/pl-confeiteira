import Image from "next/image";

export default function Bonus() {
  return (
    <div className="mt-14">
      <p className="mb-8 text-center text-xl font-bold md:text-4xl">
        CONHEÇA OS NOSSOS BÔNUS
      </p>
      <div className="flex flex-col justify-center gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-6 rounded-xl bg-[#FFF4E6] p-8">
          <Image
            src={"/img1.png"}
            alt="mulher escrevendo"
            width={150}
            height={150}
            className="object-contain"
          />
          <p className="text-xl font-bold md:text-3xl">Conseguindo Clientes</p>
        </div>
        <div className="flex flex-col items-center gap-6 rounded-xl bg-[#FFF4E6] p-8">
          <Image
            src={"/img2.png"}
            alt="mulher segurando celular"
            width={150}
            height={150}
            className="object-contain"
          />
          <p className="text-xl font-bold md:text-3xl">Gestão Financeira</p>
        </div>
      </div>
    </div>
  );
}
