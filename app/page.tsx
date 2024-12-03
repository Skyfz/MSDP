import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { FlipWords } from "@/components/ui/flip-words";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
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
