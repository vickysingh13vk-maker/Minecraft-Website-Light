import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustMarquee from "@/components/TrustMarquee";
import FeaturedProducts from "@/components/FeaturedProducts";
import AboutDrinks from "@/components/AboutDrinks";
import AboutDistribution from "@/components/AboutDistribution";
import Partnership from "@/components/Partnership";
import News from "@/components/News";
import Contact from "@/components/Contact";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-ink-900">
      <Nav />
      <Hero />
      <TrustMarquee />
      <FeaturedProducts />
      <AboutDrinks />
      <Partnership />
      <AboutDistribution />
      <News />
      <Contact />
      <FinalCTA />
      <Footer />
    </main>
  );
}
