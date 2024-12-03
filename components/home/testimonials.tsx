"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { FadeIn } from "../animations/fade-in";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CFO, Tech Solutions Inc",
    content:
      "MSDP has streamlined our accounts receivable and improved cash flow. Their personalized approach has made a real impact on our financial health.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    name: "Michael Chen",
    role: "Owner, Chen Manufacturing",
    content:
      "MSDP understands the importance of maintaining good relationships while collecting debts. Their professionalism makes a real difference in our business.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
  },
  {
    name: "Emma Williams",
    role: "Finance Director, Global Retail",
    content:
      "MSDP's transparent reporting and regular updates have helped us recover significant debts while maintaining professionalism throughout.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80"
  },
];



export function Testimonials() {
  return (
    <section className="py-4 relative overflow-hidden pt-32 pb-32">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              See what our clients say about our debt collection services
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full backdrop-blur-xl bg-background/60 border-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-xl">{testimonial.name}</p>
                    <p className="text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {testimonial.content}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}