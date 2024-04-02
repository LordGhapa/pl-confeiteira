import About from "@/components/about";
import Depoimentos from "@/components/depoimentos";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Garantia from "@/components/garantia";
import Header from "@/components/header";
import Price from "@/components/price";
import Secao2 from "@/components/secao2";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Secao2 />
        <Depoimentos />
        <About />
        <Price />
        <Garantia />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
