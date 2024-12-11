"use client";

import {Button, ButtonGroup} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, User, MessageSquare, FileText,IdCard } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerIn, StaggerItem } from "@/components/animations/stagger-in";
import {Form} from "@nextui-org/react"
import React from "react";
import {Select, SelectSection, SelectItem} from "@nextui-org/react";

export function Contact() {
  const [errors, setErrors] = React.useState({});

  interface FormData {
    fullName: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    idnum: string;
  }

  const validateForm = (data: FormData) => {
    const newErrors: Record<string, string> = {};

    if (!data.idnum?.trim()) {
      newErrors.idnum = "ID number is required";
    }else if(data.idnum.length !== 13) {
      newErrors.idnum = "ID number must be exactly 13 characters";
    }

    if (!data.fullName?.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (data.fullName.trim().length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters";
    }else if (!/^[a-zA-Z\s]+$/.test(data.fullName)) {
      newErrors.fullName = "Full name can only contain letters and spaces";
    }

    if (!data.email?.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!data.phone?.trim()) {
      newErrors.phone = "Phone number is required";
    } else {
      const phoneNumber = data.phone.trim();
      const digitsOnly = phoneNumber.replace(/\D/g, '');
      
      if (phoneNumber.startsWith('0')) {
        // For numbers starting with 0, require exactly 10 digits (including the 0)
        if (digitsOnly.length !== 10) {
          newErrors.phone = "Local numbers must be exactly 10 digits (e.g., 012-345-6789)";
        }
      } else if (phoneNumber.startsWith('+')) {
        // For numbers starting with +, allow between 11-13 characters total
        if (digitsOnly.length < 11 || phoneNumber.replace(/\s/g, '').length > 13) {
          newErrors.phone = "International numbers must be 11-13 digits (e.g., +27 12 345 6789)";
        }
      } else {
        newErrors.phone = "Phone number must start with either 0 or +";
      }
    }

    if (!data.subject) {
      newErrors.subject = "Please select a subject";
    }

    // if (!data.message?.trim()) {
    //   newErrors.message = "Message is required";
    // } else if (data.message.trim().length < 10) {
    //   newErrors.message = "Message must be at least 10 characters";
    // }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEntries = Object.fromEntries(new FormData(e.currentTarget));
    
    // Convert FormData to our expected types
    const formData: FormData = {
      fullName: String(formEntries.fullName || ''),
      email: String(formEntries.email || ''),
      phone: String(formEntries.phone || ''),
      subject: String(formEntries.subject || ''),
      message: String(formEntries.message || ''),
      idnum: String(formEntries.idnum || ''),
    };

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // If no errors, log form data
    console.log(formData);
  };

  const subjectOptions = [
    { key: 'payment-arrangement', label: 'Payment Arrangement' },
    { key: 'settlement', label: 'Settlement Inquiry' },
    { key: 'statement', label: 'Statement Request' },
    { key: 'other', label: 'Other Inquiry' }
  ];
  
  return (
    <section className="py-4 relative overflow-hidden pt-20 pb-32" id="contact">      
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
            <Card className="backdrop-blur-xl bg-background/60 border-1 hover:border-primary/50">
              <Form 
                className="p-8 space-y-6"
                onSubmit={handleSubmit}
                validationErrors={errors}
              >
                <div className="flex flex-col w-full gap-6">
                  <div className="space-y-2">
                    <Input
                      id="fullName"
                      name="fullName"
                      label="Full Name"
                      labelPlacement="outside"
                      placeholder="John Doe"
                      startContent={<User className="text-default-400 pointer-events-none flex-shrink-0" />}
                      isRequired
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      id="idnum"
                      name="idnum"
                      label="ID Number"
                      labelPlacement="outside"
                      placeholder="YYMMDD-SSSS-CAZ"
                      startContent={<IdCard className="text-default-400 pointer-events-none flex-shrink-0" />}
                      isRequired
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      label="Email"
                      labelPlacement="outside"
                      placeholder="john@example.com"
                      startContent={<Mail className="text-default-400 pointer-events-none flex-shrink-0" />}
                      isRequired
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      label="Phone"
                      labelPlacement="outside"
                      placeholder="+27 (01) 234-5678"
                      startContent={<Phone className="text-default-400 pointer-events-none flex-shrink-0" />}
                      isRequired
                    />
                  </div>
                  <div className="space-y-2">
                    <Select
                      id="subject"
                      name="subject"
                      label="Subject"
                      labelPlacement="outside"
                      placeholder="Choose a subject"
                      isRequired
                    >
                      {subjectOptions.map((option) => (
                        <SelectItem key={option.key} value={option.key}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Textarea
                      id="message"
                      name="message"
                      label="Message"
                      labelPlacement="outside"
                      placeholder="Your message..."
                      minRows={1}
                    />
                  </div>
                </div>
                <Button 
                  type="submit"
                  size="lg" 
                  variant="shadow" 
                  color="primary" 
                  className="w-full h-11"
                >
                  Send Message
                </Button>
              </Form>
            </Card>
          </motion.div>

          <StaggerIn>
            <div className="space-y-6">
              <StaggerItem>
                <Card className="p-6 backdrop-blur-xl bg-background/60 border-1 hover:border-primary/50">
                  <div className="flex gap-4">
                    <Phone className="h-6 w-6 text-foreground" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">+27(011)-972-1360</p>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
              
              <StaggerItem>
                <Card className="p-6 backdrop-blur-xl bg-background/60 border-1 hover:border-primary/50">
                  <div className="flex gap-4">
                    <Mail className="h-6 w-6 text-foreground" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">sanettep@mdsp.co.za</p>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
              
              <StaggerItem>
                <Card className="p-6 backdrop-blur-xl bg-background/60 border-1 hover:border-primary/50">
                  <div className="flex gap-4">
                    <MapPin className="h-6 w-6 text-foreground" />
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        Aston Manor House<br/>
                        Unit 27<br/>
                        128 Monument Road<br/>
                        Aston Manor<br/>
                        Kempton Park<br/>
                        GP 1620</p>
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