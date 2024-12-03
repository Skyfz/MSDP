import { Hero } from "@/components/home/hero";
import { Features } from "@/components/home/features";
import { Testimonials } from "@/components/home/testimonials";
import { Contact } from "@/components/home/contact";
import { FAQ } from "@/components/home/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-2 md:py-6">
      <div id="hero">
        <Hero />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <Footer />
    </section>
  );
}
