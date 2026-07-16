import Navbar from "../components/Navbar";
import POSShowcase from "../components/POSShowcase";
import Footer from "../components/Footer";

export default function POSPage() {
  return (
    <>
      <Navbar />

      <main>
        <POSShowcase />
      </main>

      <Footer />
    </>
  );
}