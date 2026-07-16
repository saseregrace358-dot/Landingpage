import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import POSShowcase from "../components/POSShowcase";
import PricingPage from "../components/PricingPage";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <POSShowcase />

        <PricingPage />
      </main>

      <Footer />
    </>
  );
}