import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceCategories from "@/components/ServiceCategories";
import BusinessLines from "@/components/BusinessLines";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <ServiceCategories />
      <BusinessLines />
      <Stats />
      <Footer />
    </main>
  );
}