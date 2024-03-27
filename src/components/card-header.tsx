import { cn } from "@/lib/utils";
import Image from "next/image";

export default function CardHeader() {
  function InnerCard({
    url,
    alt,
    size,
    nome1,
    nome2,
    className,
  }: {
    url: string;
    alt: string;
    size: number;
    nome1: string;
    nome2?: string;
    className?: string;
  }): React.ReactNode {
    return (
      <div className={cn("flex items-center gap-3", className)}>
        <Image
          src={url}
          alt={alt}
          width={size}
          height={size}
          className="md:hidden"
        />
        <Image
          src={url}
          alt={alt}
          width={size + 20}
          height={size + 20}
          className="hidden md:block"
        />
        <p className="display flex flex-col text-xs  font-bold uppercase text-primary md:text-lg ">
          {nome1} <span>{nome2}</span>
        </p>
      </div>
    );
  }

  return (
    <div className="mt-4 flex flex-col items-center justify-center gap-6 rounded-2xl  bg-white p-4 md:flex-row md:justify-around md:p-4">
      <InnerCard
        url="/escudo.svg"
        alt="escudo laranja"
        size={40}
        nome1="Pagamento"
        nome2="seguro"
      />
      <InnerCard
        url="/avançar.svg"
        alt="escudo laranja"
        size={40}
        nome1="acesso"
        nome2="Imediato"
        className="-ml-5"
      />
      <InnerCard
        url="/pc.svg"
        alt="escudo laranja"
        size={40}
        nome1="totalmente"
        nome2="online"
      />
    </div>
  );
}
