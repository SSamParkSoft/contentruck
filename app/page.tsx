import { About } from "@/components/About";
import { Approach } from "@/components/Approach";
import { Contact } from "@/components/Contact";
import { Direction } from "@/components/Direction";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Principles } from "@/components/Principles";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Approach />
        <Principles />
        <Direction />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
