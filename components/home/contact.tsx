"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, User, MessageSquare, FileText } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerIn, StaggerItem } from "@/components/animations/stagger-in";

export function Contact() {
  return (
    <section className="py-4 relative overflow-hidden pt-32 pb-32" id="contact">      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Let&apos;s discuss how we can help recover your outstanding debts
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="backdrop-blur-xl bg-background/60 border-0">
              <form className="p-8 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm font-medium flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      Full Name
                    </label>
                    <Input 
                      id="fullName"
                      placeholder="John Doe" 
                      className="h-11 shadow-xl" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      Email
                    </label>
                    <Input 
                      id="email"
                      type="email" 
                      placeholder="john@company.com" 
                      className="h-11 shadow-xl" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    Subject
                  </label>
                  <Input 
                    id="subject"
                    placeholder="How can we help?" 
                    className="h-11 shadow-xl" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    placeholder="Your message..." 
                    className="min-h-[80px] resize-none shadow-xl" 
                  />
                </div>
                <Button size="lg" className="w-full h-11">Send Message</Button>
              </form>
            </Card>
          </motion.div>

          <StaggerIn>
            <div className="space-y-6">
              <StaggerItem>
                <Card className="p-6 backdrop-blur-xl bg-background/60 border-0">
                  <div className="flex gap-4">
                    <Phone className="h-6 w-6 text-foreground" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">+27 (011) 972-1555</p>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
              
              <StaggerItem>
                <Card className="p-6 backdrop-blur-xl bg-background/60 border-0">
                  <div className="flex gap-4">
                    <Mail className="h-6 w-6 text-foreground" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">contact@msdp.com</p>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
              
              <StaggerItem>
                <Card className="p-6 backdrop-blur-xl bg-background/60 border-0">
                  <div className="flex gap-4">
                    <MapPin className="h-6 w-6 text-foreground" />
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-muted-foreground">128 Monument Road<br/> Aston Manor House<br />Kempton Park<br/>GP 1620</p>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            </div>
          </StaggerIn>
        </div>
      </div>
    </section>
  );
}