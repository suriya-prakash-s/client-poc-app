import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import Features from "./components/Features";
import CodeShowcase from "./components/CodeShowcase";
import SocialProof from "./components/SocialProof";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Features />
        <CodeShowcase />
        <SocialProof />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
