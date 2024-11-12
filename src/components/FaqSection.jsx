import { LuMessageSquarePlus } from 'react-icons/lu';
import { FaChevronUp } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';

import Chip from './Chip';
import { useState } from 'react';
import { FaqData } from '../constant/data';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  function handleCLick(id) {
    setOpenIndex(openIndex === id ? null : id);
  }

  return (
    <section className="max-w-[1400px] mx-auto px-[3%] pt-24">
      <div className="mb-8">
        <Chip icon={<LuMessageSquarePlus />}>Testimonial</Chip>
      </div>
      <h2 className="bg-clip-text text-transparent bg-custom-gradient-text text-2xl text-center mb-3 md:text-3xl lg:text-4xl xl:text-5xl">
        Frequently Asked Question's
      </h2>
      <p className="text-center text-neutral-400 mb-16">
        Don't see the answer you're looking for?{' '}
        <span className="text-orange-400 cursor-pointer">Get in touch.</span>
      </p>

      <div className="container w-full m-auto flex flex-col gap-3 sm:w-[95%] md:w-[65%] lg:w-[55%] xl:w-[55%]">
        {FaqData.map((faq) => (
          // Accordion
          <div
            key={faq.id}
            className={`accordion px-5 py-2 rounded-md bg-neutral-900 border border-neutral-700  ${
              openIndex === faq.id ? 'shadow-custome' : ''
            } `}
          >
            {/* Accordion Header */}
            <div
              onClick={() => handleCLick(faq.id)}
              className={`${
                openIndex === faq.id ? 'mb-5' : 'mb-0'
              } accordion-header flex justify-between items-center gap-5`}
            >
              <button
                className={`w-[100%] text-neutral-100 text-start text-sm font-light lg:text-base`}
              >
                {faq.question}
              </button>
              {openIndex === faq.id ? (
                <div className="cursor-pointer text-sm lg:text-base">
                  <FaChevronUp />
                </div>
              ) : (
                <div className="cursor-pointer text-sm lg:text-base">
                  <FaChevronDown />
                </div>
              )}
            </div>

            {/* Accordion Body */}
            {openIndex === faq.id && (
              <div className="accordion-body text-neutral-400 ">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
