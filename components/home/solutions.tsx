"use client";

import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/react";
import Image from "next/image";
import {
  BarChart3,
  Building,
  FileCheck,
  MessageSquare,
  Shield,
  Users,
  ArrowRight,
} from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerIn, StaggerItem } from "@/components/animations/stagger-in";
import Link from "next/link";

export function Solutions() {
  return (
    <section className="py-4 lg:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">  
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <FadeIn direction="left">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                alt="Professional team"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
          <div className="flex flex-col gap-4">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Customised Recovery&nbsp;
                <span className="text-gradient">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive debt collection solutions tailored to your needs: we leverage industry expertise and advanced technology to deliver outstanding results, effectively addressing complex challenges while fostering strong client relationships.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button 
                  size="lg" 
                  variant="shadow" 
                  color="primary" 
                  className="text-lg h-14"
                  as={Link}
                  href="#contact"
                  >
                    Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                  size="lg" 
                  variant="light" 
                  className="text-lg h-14"
                  as={Link}
                  href="#features"
                  >
                    Features
                </Button>
              </div>
          </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}