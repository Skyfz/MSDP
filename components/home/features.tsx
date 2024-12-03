"use client";

import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Button, ButtonGroup} from "@nextui-org/button";
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

const features = [
  {
    icon: Shield,
    title: "Compliant Recovery",
    description:
      "Our debt collection practices strictly adhere to all regulatory requirements.",
  },
  {
    icon: Users,
    title: "Professional Team",
    description:
      "Experienced professionals handling your accounts with care and expertise.",
  },
  {
    icon: BarChart3,
    title: "High Success Rate",
    description:
      "Industry-leading recovery rates through proven collection strategies.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description:
      "Regular updates and transparent reporting on collection progress.",
  },
  {
    icon: Building,
    title: "Business Focus",
    description:
      "Tailored solutions for businesses of all sizes across various industries.",
  },
  {
    icon: FileCheck,
    title: "Documentation",
    description:
      "Comprehensive documentation and reporting for all collection activities.",
  },
];

export function Features() {
  return (
    <section className="py-4 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-gradient">Our Services</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
              Comprehensive debt collection services tailored to your needs
            </p>
          </FadeIn>
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
          <FadeIn direction="right" delay={0.2}>
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold">
                Expert Team,&nbsp;<br/>
                <span className="text-gradient">Proven&nbsp;Results</span>
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
              Our experts leverage industry knowledge and advanced technology to 
              achieve exceptional outcomes.<br/>
              We recognize the challenges of debt 
              recovery and are committed to safeguarding your interests while 
              fostering professional relationships.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" variant="shadow" color="primary" className="text-lg h-14">
                Get a Call Back
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="light" className="text-lg h-14">
                Read More
              </Button>
            </div>
          </FadeIn>
        </div>
        

        <StaggerIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-48 mb-48">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <Card className="p-8 h-full bg-background border-1 border-foreground/20 hover:border-primary/50 transition-all duration-300">
                  <feature.icon className="h-12 w-12 text-foreground mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </div>
        </StaggerIn>
      </div>
    </section>
  );
}