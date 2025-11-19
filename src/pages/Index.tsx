import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import Leadership from "@/components/Leadership";
import Gallery from "@/components/Gallery";
import News from "@/components/News";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const Index = () => {
  useEffect(() => {
    // Scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Approach />
      <Services />
      <Leadership />
      <Gallery />
      <News />
      <Testimonials />
      <FAQ />
      <Partners />
      <Contact />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Index;
