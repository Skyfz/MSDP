"use client";

import {Button, ButtonGroup} from "@nextui-org/button";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/animations/fade-in";
import { ScaleIn } from "@/components/animations/scale-in";
import { FlipWords } from "@/components/ui/flip-words";

export function Hero() {

  const words = ["Reliability", "Efficiency", "Integrity", "Results", "Support"];

  return (
    <section className="min-h-screen">
      <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center lg:-mt-32">
          <div className="space-y-8 mt-4">
            <FadeIn>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Debt Recovery Solutions with<br />
              <FlipWords words={words} className="-ml-2"/>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Maritz Schreurs & Du Preez Inc. provides expert services focused on maximizing recovery while maintaining positive business relationships.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  as={Link}
                  href="#features"
                  size="lg" 
                  variant="shadow" 
                  color="primary" 
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
                  Learn More
                </Button>
              </div>
            </FadeIn>
          </div>

          <ScaleIn delay={0.2}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1554774853-719586f82d77?auto=format&fit=crop&q=80"
                alt="Business professionals"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                <div className="grid sm:grid-cols-2 gap-2 md:gap-4">
                  <FadeIn delay={0.6}>
                    <Card className="bg-background/80 backdrop-blur-sm border-none">
                      <div className="p-4">
                        <h3 className="text-lg md:text-4xl font-bold md:mb-2 text-gradient">95%</h3>
                        <p className="text-lg md:text-xl">Success Rate</p>
                      </div>
                    </Card>
                  </FadeIn>
                  <FadeIn delay={0.8}>
                    <Card className="bg-background/80 backdrop-blur-sm border-none">
                      <div className="p-4">
                        <h3 className="text-lg md:text-4xl font-bold md:mb-2 text-gradient">24/7</h3>
                        <p className="text-lg md:text-xl">Support</p>
                      </div>
                    </Card>
                  </FadeIn>
                </div>
              </div>
            </div>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
}