import Features from "@/components/Featured";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Features />
      <Footer />
    </main>
  );
}
