import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Voice from "@/components/Voice";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Trust from "@/components/Trust";
import Validation from "@/components/Validation";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import DemoForm from "@/components/DemoForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <Problem />
        <Voice />
        <Solution />
        <HowItWorks />
        <Trust />
        <Validation />
        <Pricing />
        <FAQ />
        <DemoForm />
      </main>
      <Footer />
    </>
  );
}
