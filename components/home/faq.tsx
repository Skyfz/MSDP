"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What types of debt do you collect?",
    answer: "We handle all types of debt, including personal, business, consumer loans, credit card debt, unpaid invoices, and B2B collections. We work across a range of sectors to ensure successful recovery."
  },
  {
    question: "How long does the debt collection process take?",
    answer: "The duration depends on the specifics of the case, such as the debt amount and the debtor’s willingness to cooperate. While some cases are resolved within weeks, others may take a few months."
  },
  {
    question: "What makes your debt collection services unique?",
    answer: "We prioritize clear communication, professionalism, and ethical practices. We use a tailored approach for each case, combining technology with personal attention to ensure timely results."
  },
  {
    question: "What is your fee structure?",
    answer: "Our fees are contingency-based, meaning we only charge when the debt is successfully recovered. The fee depends on the complexity and value of the debt, and we provide a clear quote after reviewing your case."
  },
  {
    question: "Do you offer international debt collection services?",
    answer: "Yes, we specialize in both domestic and international debt collection. Our global network allows us to recover debts from overseas while adhering to local laws and regulations."
  },
  {
    question: "What happens if the debtor refuses to pay?",
    answer: "If a debtor refuses to pay, we follow a structured process that may include additional negotiations, legal actions, or other methods to ensure recovery. Our team works to resolve issues efficiently without damaging your business relationships."
  },
  {
    question: "How do you ensure compliance with debt collection laws?",
    answer: "We follow all applicable debt collection laws and regulations to ensure compliance. Our team stays up-to-date with legal changes and uses ethical practices in all collections."
  },
  {
    question: "Will my business relationship with the debtor be affected?",
    answer: "We take a professional and relationship-focused approach to collections, aiming to recover debts without damaging your business relationships. Our goal is to maintain a positive working relationship while resolving financial matters."
  },
  {
    question: "Can you help with both small and large debts?",
    answer: "Yes, we handle debts of all sizes, from small outstanding invoices to large corporate debts. No matter the size, we focus on maximizing recovery and minimizing the impact on your business."
  },
  {
    question: "How can I get started with debt collection?",
    answer: "Getting started is easy. Simply contact us with details of the debt, and our team will review your case and advise you on the next steps. We will provide a tailored solution that fits your needs."
  },
];


export function FAQ() {
  return (
    <section className="py-4 bg-muted/50 pt-32 pb-32" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Find answers to common questions about our services
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="backdrop-blur-xl bg-background/60 border-0 rounded-lg">
                <AccordionTrigger className="px-6 text-lg font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}