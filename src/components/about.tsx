import Image from "next/image";

export default function About() {
  return (
    <div>
      <div className="container flex w-full max-w-7xl flex-col items-center py-12 lg:flex-row lg:justify-between">
        <div className="mb-8 lg:w-1/2">
          <Image
            src={"/mulherbolo.png"}
            alt="Mulher segurando um bolo"
            width={500}
            height={500}
          />
        </div>
        <div className="lg:w-1/2">
          <p className="text-sm font-bold">COM QUEM VOCÊ VAI APRENDER</p>
          <h3 className="mb-2 text-lg font-bold md:text-3xl">MARIA MORAIS</h3>
          <p className="mb-2">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.
          </p>
          <p>
            Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
            non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequat duis enim velit mollit. Exercitation veniam
            consequat sunt nostrud amet.
          </p>
        </div>
      </div>
    </div>
  );
}
