import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import Footer from "./components/Footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Home />
      </main>

      <Footer />
    </>
  );
}