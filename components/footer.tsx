"use client";

import { Building2, LogIn, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { Link as NextUILink } from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import { FaWhatsapp } from "react-icons/fa";
import { LogoIcon } from "./icons";


export function Footer() {
  return (
    <footer className="bg-muted/30 backdrop-blur-xl border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <LogoIcon/>
             </Link>
             <span className="font-bold text-xl">Maritz, Schreurs & Du Preez Inc.</span>
            <p className="text-muted-foreground">
              Professional debt recovery solutions for businesses, combining expertise with ethical practices.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>+27(011)-972-1360</p>
              {/* <p>sanettep@msdp.com</p> */}
              <p>
                Aston Manor House<br/>
                Unit 27<br/>
                128 Monument Road<br/>
                Aston Manor<br/>
                Kempton Park<br/>
                GP 1620
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Business Hours</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Monday - Thursday</p>
              <p>8:00 AM - 4:30 PM SAST</p>
              <p>Friday</p>
              <p>8:00 AM - 3:00 PM SAST</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a 
                href="tel:+27119721360" 
                className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                aria-label="Call us"
              >
                <Phone className="h-6 w-6" />
              </a>
              <a 
                href="mailto:sanettep@msdp.com" 
                className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                aria-label="Email us"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a 
                href="https://wa.me/27119721360" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                aria-label="Message us on WhatsApp"
              >
                <FaWhatsapp className="h-6 w-6" />
              </a>
            </div>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t text-center font-bold text-muted-foreground">
          <p> {new Date().getFullYear()} MSDP. All rights reserved.</p>
        </div>
        <div className="pt-4 text-center text-muted-foreground">
          <p>Registration Number: 2007/005476/21</p>
        </div>
      </div>
      <footer className="w-full flex items-center justify-center py-3">
              <NextUILink
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://skyfz.github.io/"
                title="skypoint development homepage"
              >
                <span className="text-default-400">Powered by</span>
                <p className="text-primary">Skypoint</p>
              </NextUILink>
            </footer>
    </footer>
    
  );
}