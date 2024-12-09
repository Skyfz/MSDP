"use client";

import { Building2, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { Link as NextUILink } from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import { FaWhatsapp } from "react-icons/fa";


export function Footer() {
  return (
    <footer className="bg-muted/30 backdrop-blur-xl border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Building2 className="h-6 w-6 text-foreground" />
              <span className="font-bold text-xl">MSDP</span>
            </Link>
            <p className="text-muted-foreground">
              Professional debt recovery solutions for businesses, combining expertise with ethical practices.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>128 Monument Road</p>
              <p>Kempton Park, GP 1620</p>
              <p>+27(11) 972-1555</p>
              <p>info@msdp.com</p>
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
              <p>Monday - Friday</p>
              <p>9:00 AM - 6:00 PM SAST</p>
              {/* <p>24/7 Online Support Available</p> */}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a 
                href="tel:+27119721555" 
                className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                aria-label="Call us"
              >
                <Phone className="h-6 w-6" />
              </a>
              <a 
                href="mailto:info@msdp.com" 
                className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                aria-label="Email us"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a 
                href="https://wa.me/27728288471" 
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
        
        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p> {new Date().getFullYear()} MSDP. All rights reserved.</p>
        </div>
      </div>
      <footer className="w-full flex items-center justify-center py-3">
              <NextUILink
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://skyfz.github.io/"
                title="skypoint development homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">Skypoint</p>
              </NextUILink>
            </footer>
    </footer>
    
  );
}