'use client';
import React, { useState } from 'react';

const FAQ = () => {
  const [open, setOpen] = useState(0);

  const faqs = [
    {
      question: 'What is AutoGrid Poker?',
      answer: 'AutoGrid is a table management & organization software unlike any other in the market, without prior configuration it allows you to get the most out of your screens'
    },
    {
      question: 'Why should I use AutoGrid?',
      answer: `Unlike other software in the market, AutoGrid gives an easy & compact way to
      have your tables fully organized to the point or fully utilizing your screen. You will
      need to spend no time in configurations.`
    },
    {
      question: 'Will AutoGrid improve my EV?',
      answer: `Poker is a competitive sport, and comfort makes the difference. Without AutoGrid
      your tables will be scattered and will cause you to waste your focus. Do yourself
      a favor and organize your workstation.`
    },
    {
      question: 'Is it allowed to use AutoGrid while playing?',
      answer: `Tiling & Table Management Software is commonly alloed by poker-sites so you
      have nothing to worry about. For more specific doubts please contact your
      casino's support.`
    },
    {
      question: 'Can I use my AutoGrid License on my 2 computers?',
      answer: `No. License Keys are attached to specific hardware, which sets a 1-1 relation
      between PC & Lisence.`
    },
    {
      question: 'Does license include Support Assistance?',
      answer: `No. We developed this product for minimal support. This means we will maintain
      the software to work with poker-site updates. But the support for use-related
      questions is minimal. Please refer to the User Manual.`
    }
  ];

  function handleAccordion(i) {
    setOpen(i);
  }

  return (
    <section className="max-w-featuresWidth mx-4 md:mx-auto mt-32 mb-32">
      <h2 className="font-bold text-2xl md:text-5xl text-center mb-3.5">FAQ</h2>
      <div className="flex flex-col gap-5 md:gap-8 justify-center mb-8 rounded-t-lg ">
        {faqs.map((faq, i) => {
          return (
            <div className="bg-cardBg rounded-lg" key={i}>
              <div className="bg-secondaryBg rounded-t-lg flex justify-between py-5 px-3.5 md:px-8 cursor-pointer" onClick={() => handleAccordion(i)}>
                <h2 className="text-lg md:text-2xl font-bold">{faq.question}</h2>
                {open === i ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M22.6667 20L16 13.3333L9.33332 20L22.6667 20Z" fill="url(#paint0_linear_26_2075)" />
                    <defs>
                      <linearGradient id="paint0_linear_26_2075" x1="16" y1="20" x2="16" y2="13.3333" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#1388AB" />
                        <stop offset="1" stop-color="#1E5492" />
                      </linearGradient>
                    </defs>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M9.33325 13.3333L15.9999 19.9999L22.6666 13.3333H9.33325Z" fill="url(#paint0_linear_15_1270)" />
                    <defs>
                      <linearGradient id="paint0_linear_15_1270" x1="15.9999" y1="13.3333" x2="15.9999" y2="19.9999" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#1388AB" />
                        <stop offset="1" stop-color="#1E5492" />
                      </linearGradient>
                    </defs>
                  </svg>
                )}
              </div>
              <div className={`transition-all ${open === i ? 'h-auto py-5 px-3.5 md:px-8' : 'h-0 overflow-hidden'}`}>
                <p className="text-lg">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
