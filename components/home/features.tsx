"use client"

import { Card } from "@nextui-org/react";
import { StaggerIn, StaggerItem } from "@/components/animations/stagger-in";
import {Shield, Users, BarChart3, MessageSquare, Building, FileCheck} from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";


const features = [
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description:
      "Strict adherence to banking and financial regulations",
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
    title: "Transparent Reporting",
    description:
      "Regular updates and transparent reporting on collection progress.",
  },
  {
    icon: Building,
    title: "Financial Expertise",
    description:
      "Specialized professionals handling institutional debt portfolios",
  },
  {
    icon: FileCheck,
    title: "Institutional Solutions",
    description:
      "Tailored approaches for banking sector debt management",
  },
];

export function Features() {
  return (
    <section className="pt-24 lg:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Excellent debt<br/>
                <span className="text-gradient">Features</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
              Industry-leading debt recovery solutions with proven expertise
            </p>
          </FadeIn>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
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
      </div>
    </section>
  );
}
