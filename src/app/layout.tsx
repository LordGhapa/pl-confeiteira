import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TailwindIndicator } from "@/components/TailwindIndicator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Confeiteira de Sucesso",
  description: "Landing Page Curso de Confeiteira",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
        <TailwindIndicator />
      </body>
    </html>
  );
}
