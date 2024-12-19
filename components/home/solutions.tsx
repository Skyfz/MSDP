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
    <section className="py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="">  
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1436450412740-6b988f486c6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                  variant="solid" 
                  color="success" 
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