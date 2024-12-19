"use client";

import {Button, ButtonGroup, Divider} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/animations/fade-in";
import { ScaleIn } from "@/components/animations/scale-in";
import { FlipWords } from "@/components/ui/flip-words";

export function Hero() {

  const words = ["Efficiency", "Integrity", "Results", "Support"];

  return (
    <section className="min-h-svh">
      <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-svh items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center lg:-mt-32">
          <div className="space-y-8">
            <FadeIn>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight pb-6 pt-6">
                Maritz, Schreurs<br/>
                & Du Preez Inc.
              </h1>
              <ScaleIn delay={0.2} className="pb-6">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden lg:hidden">
                  <Image
                    src="/hero.jpg"
                    alt="Business professionals"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </ScaleIn>
              <h1 className="text-2xl md:text-5xl lg:text-3xl leading-tight font-bold -mb-4 lg:pt-8">
                Recover&nbsp;with&nbsp;  
                <FlipWords words={words} className="-ml-2"/>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed pb-2">
              Expert services focused on maximizing recovery while maintaining positive consumer-attorney relationships.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  as={Link}
                  href="#solutions"
                  size="lg" 
                  variant="solid" 
                  color="success" 
                  className="text-lg h-14"
                >
                  Read More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  as={Link}
                  href="#faq"
                  size="lg" 
                  variant="light" 
                  className="text-lg h-14"
                >
                  FAQ&apos;s
                </Button>
              </div>
            </FadeIn>
          </div>
          <ScaleIn delay={0.2} className="pb-6">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden hidden lg:block">
                  <Image
                    src="/hero.jpg"
                    alt="Business professionals"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </ScaleIn>

          
        </div>
      </div>
    </section>
  );
}