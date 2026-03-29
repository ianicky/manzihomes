import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedProjects from "@/components/FeaturedProjects";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Credentials from "@/components/Credentials";
import GetQuote from "@/components/GetQuote";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <Hero />
      <Services/>
      <FeaturedProjects />
      {/* <Videos /> */}
      <About />
      <WhyChooseUs />
      <Credentials />
      <GetQuote />
      <WhatsAppButton />
      <Footer />
    </main>
  );
}