"use client";

import {Button, ButtonGroup} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, User, MessageSquare, FileText } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerIn, StaggerItem } from "@/components/animations/stagger-in";
import {Form} from "@nextui-org/form"
import React from "react";
import {Select, SelectSection, SelectItem} from "@nextui-org/react";

export function Contact() {
  const [formErrors, setFormErrors] = React.useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const subjectOptions = [
    { key: 'debt-recovery', label: 'Debt Recovery Services' },
    { key: 'financial-consultation', label: 'Financial Consultation' },
    { key: 'institutional-support', label: 'Institutional Debt Management' },
    { key: 'other', label: 'Other Inquiry' }
  ];

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'fullName':
        return value.trim().length < 2 ? 'Please enter your full name' : '';
      case 'email':
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return !emailRegex.test(value) ? 'Please enter a valid email address (e.g., name@example.com)' : '';
      case 'phone':
        // Remove all non-digit characters
        const digitsOnly = value.replace(/\D/g, '');
        // Check if number of digits is between 10 and 10, 
        // and total length (including potential country code) is max 13
        return (digitsOnly.length < 10 || value.replace(/\s/g, '').length > 13) 
          ? 'Please enter a valid phone number (e.g., 012-345-6789 or +27 (23) 456 7890)' 
          : '';
      case 'subject':
        return !value ? 'Please select a subject' : '';
      case 'message':
        return value.trim().length < 10 ? 'Please enter a message with at least 10 characters' : '';
      default:
        return '';
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Force validation on all fields, even if they weren't touched
    const errors = {
      fullName: validateField('fullName', formData.get('fullName')?.toString() || ''),
      email: validateField('email', formData.get('email')?.toString() || ''),
      phone: validateField('phone', formData.get('phone')?.toString() || ''),
      subject: validateField('subject', formData.get('subject')?.toString() || ''),
      message: validateField('message', formData.get('message')?.toString() || '')
    };

    setFormErrors(errors);

    // Check if there are any errors
    const hasErrors = Object.values(errors).some(error => error !== '');
    
    if (hasErrors) {
      return;
    }

    // If no errors, log or submit form
    console.log({
      name: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message')
    });
  };
  
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
            <Card className="backdrop-blur-xl bg-background/60 border-1 hover:border-primary/50">
              <Form 
                className="p-8 space-y-6"
                onSubmit={handleSubmit}
                validationBehavior="native"
              >
                <div className="flex flex-col w-full gap-6">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm font-medium flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      Full Name
                    </label>
                    <Input 
                      isRequired
                      name="fullName"
                      type="text"
                      label="Full Name"
                      placeholder="John Doe"
                      isInvalid={!!formErrors.fullName}
                      errorMessage={formErrors.fullName}
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      Email
                    </label>
                    <Input 
                      isRequired
                      name="email"
                      type="email"
                      label="Email"
                      placeholder="john@email.com"
                      isInvalid={!!formErrors.email}
                      errorMessage={formErrors.email}
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      Phone
                    </label>
                    <Input 
                      isRequired
                      name="phone"
                      type="tel"
                      label="Phone"
                      placeholder="+27(01) 234-4567"
                      isInvalid={!!formErrors.phone}
                      errorMessage={formErrors.phone}
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      Subject
                    </label>
                    <Select
                      isRequired
                      name="subject"
                      label="Select Subject"
                      placeholder="Choose a subject"
                      className="w-full"
                      isInvalid={!!formErrors.subject}
                      errorMessage={formErrors.subject}
                    >
                      {subjectOptions.map((option) => (
                        <SelectItem key={option.key} value={option.key}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-muted-foreground" />
                      Message
                    </label>
                    <Textarea 
                      isRequired
                      name="message"
                      label="Message"
                      placeholder="Your message..."
                      isInvalid={!!formErrors.message}
                      errorMessage={formErrors.message}
                      className="min-h-[80px] w-full"
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
                      <p className="text-muted-foreground">+27(11) 972-1555</p>
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
                      <p className="text-muted-foreground">tanya@msdp.co.za</p>
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