"use client";
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What types of debt do you collect?",
    answer: "We specialize in institutional debt recovery, focusing on banking debt portfolios. This includes retail debts like consumer loans, credit card debt, and other financial obligations managed by our banking partners."
  },
  {
    question: "How long does the debt recovery process take?",
    answer: "The timeline varies depending on the complexity of the debt portfolio and the debtor’s willingness to cooperate. Cases can range from targeted short-term interventions to comprehensive long-term strategies."
  },
  {
    question: "What makes your debt recovery services unique?",
    answer: "We combine advanced financial technologies, data-driven strategies, and professional communication to maximize recovery. Our ethical practices ensure compliance and maintain institutional relationships."
  },
  {
    question: "What is your fee structure?",
    answer: "Our fees are contingency-based, tailored to align with the complexity and value of each debt portfolio. We provide this information to the banks on a case-by-case basis."
  },
  {
    question: "Do you handle international debt recovery?",
    answer: "Yes, we specialize in cross-border debt recovery for banks, ensuring compliance with international regulations and leveraging our global expertise."
  },
  {
    question: "What happens if a debt remains unrecovered?",
    answer: "We follow a multi-stage escalation process, utilizing advanced financial and legal strategies to maximize recovery potential while protecting institutional relationships."
  },
  {
    question: "How do you ensure compliance with regulations?",
    answer: "Our team rigorously adheres to financial and banking regulations, continuously updating our practices to reflect the latest standards in compliance."
  },
  {
    question: "Will my relationship with debtors be affected?",
    answer: "Our professional and relationship-focused approach ensures debts are recovered without harming your institution's reputation or client relationships."
  },
  {
    question: "Can you manage debts of different scales?",
    answer: "Yes, we are equipped to handle debt portfolios of all sizes, from individual retail cases to large-scale institutional debt management."
  },
  {
    question: "How we get started?",
    answer: "We contact you with details of your debt portfolio. Our team will assess your case and provide a tailored recovery strategy."
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
          <Accordion 
            defaultExpandedKeys={["0"]} 
            variant="bordered" 
            selectionMode="multiple"
          >
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                aria-label={faq.question}
                title={faq.question}
                className="p-2"
              >
                <div className="w-full">
                  {faq.answer}
                </div>
              </AccordionItem>
            ))}
          </Accordion>
      </div>
    </section>
  );
}