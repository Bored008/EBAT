'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/icons/Icon';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: "What types of drones does EBAT offer?",
    answer: "We build FPV drones for close-range precision missions and fixed wing drones for long-range, wide-area coverage - each paired with our edge AI system."
  },
  {
    question: "What is edge AI, and why does it matter?",
    answer: "Edge AI processes data locally on the drone in real-time, eliminating latency from cloud uploads. It matters because it enables instant decision-making and operational security in disconnected environments."
  },
  {
    question: "Do you work with security and defense clients?",
    answer: "Yes, our systems are built to meet the rigorous demands of security, surveillance, and defense operations, offering encrypted communications and robust hardware."
  },
  {
    question: "How fast is your repair turnaround?",
    answer: "Our typical repair turnaround is between 24 to 48 hours for standard maintenance. We know uptime is critical, so we prioritize getting your fleet back in the air."
  },
  {
    question: "Do you offer training?",
    answer: "Absolutely. We offer comprehensive pilot training programs covering flight operations, emergency protocols, and how to maximize the utility of our Edge AI capabilities."
  },
  {
    question: "Can I get parts if I didn't buy my drone from EBAT?",
    answer: "Yes, we stock a wide variety of OEM and premium aftermarket parts compatible with major drone platforms, not just our custom builds."
  },
  {
    question: "How do I get a quote?",
    answer: "Simply click the 'Request a Quote' button or 'Contact Us' on this page, fill out your project details, and our team will get back to you within one business day."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full flex justify-center px-4 md:px-8">
      <div className="flex flex-col lg:flex-row items-start justify-between w-full max-w-[1260px] gap-[40px] lg:gap-[117px]">
        
        {/* Left Column - General Questions */}
        <div className="flex flex-col justify-between w-full lg:w-[513px] lg:h-[584px] gap-8 lg:gap-0 lg:sticky lg:top-24">
          <div className="max-w-[470px]">
            <h2 className="font-heading font-bold text-[48px] lg:text-[64px] leading-tight lg:leading-[72px] tracking-[-0.02em] text-white">
              General Questions asked by <span className="font-accent italic font-normal text-[#F00511]/75">customers</span>
              <span className="font-accent font-normal text-[#F00511]/75">.</span>
            </h2>
          </div>
          
          <div className="flex flex-col w-full gap-[15px]">
            <p className="font-sans text-[16px] text-white/75 leading-snug tracking-[-0.02em]">
              Our friendly team is always here to help you with quick, clear, and reliable answers whenever needed.
            </p>
            <div className="self-start">
              <Button variant="filled">Contact Us</Button>
            </div>
          </div>
        </div>

        {/* Right Column - Accordion */}
        <div className="flex flex-col w-full lg:w-[630px] gap-[12px]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={cn(
                  "flex flex-col w-full rounded-[8px] p-[24px_18px] transition-colors duration-300 cursor-pointer overflow-hidden",
                  isOpen ? "bg-[#F00511]" : "bg-white hover:bg-gray-50"
                )}
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex flex-row justify-between items-start gap-[10px] w-full">
                  <div className="flex flex-col gap-[10px] w-full pr-4">
                    <h3 
                      className={cn(
                        "font-sans font-medium text-[16px] leading-snug tracking-[-0.02em] transition-colors duration-300",
                        isOpen ? "text-white" : "text-black"
                      )}
                    >
                      {faq.question}
                    </h3>
                    
                    <div 
                      className={cn(
                        "grid transition-all duration-300 ease-in-out",
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="font-sans text-[16px] text-white/75 leading-snug tracking-[-0.02em] pt-[10px]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink-0 pt-1">
                    {isOpen ? (
                      <div className="w-[18px] h-[18px] flex items-center justify-center rounded-[30px] border border-white">
                        <Icon name="minus" className="text-white w-full h-full" />
                      </div>
                    ) : (
                      <div className="w-[18px] h-[18px] flex items-center justify-center rounded-[30px] border border-black">
                        <Icon name="plus-filled" className="text-black w-full h-full" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
