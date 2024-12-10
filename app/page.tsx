import { Hero } from "@/components/home/hero";
import { Solutions } from "@/components/home/solutions";
import { Features } from "@/components/home/features";
import { Reviews } from "@/components/home/reviews";
import { Contact } from "@/components/home/contact";
import { FAQ } from "@/components/home/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-2 md:py-6">
      <div id="hero">
        <Hero />
      </div>
      <div id="solutions">
        <Solutions/>
      </div>
      <div id="features">
        <Features/>
      </div>
      {/* <div id="reviews">
        <Reviews />
      </div> */}
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
