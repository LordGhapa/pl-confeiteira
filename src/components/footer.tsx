import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary py-4">
      <div className="container flex w-full max-w-7xl flex-col items-center justify-center gap-1 text-xs text-white md:text-base  lg:flex-row">
        <span>TODOS OS DIREITOS RESERVADOS</span>
        <span>POLITICA DE PRIVACIDADE — TERMOS DE USO</span>
        <span className="hidden lg:block"> — </span>
        <Link href={"felipe-lacerda.vercel.app"} className="hover:text-black">
          FEITO POR FELIPE LACERDA
        </Link>
      </div>
    </footer>
  );
}
