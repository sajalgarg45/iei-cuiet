import React from 'react';
import { motion } from 'framer-motion';
import testimonialsData from '../assets/testimonials.json';

function Testimonials() {
  const testimonialVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const quoteVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <motion.section
      className="py-12 sm:py-16 lg:py-20"
      initial="hidden"
      animate="visible"
      variants={testimonialVariants}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl xl:text-5xl font-pj">
              Testimonials
            </h2>
          </div>

          <div className="relative mt-10 md:mt-24 md:order-2">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"></div>
            </div>

            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
              {testimonialsData.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col overflow-hidden shadow-xl border border-white rounded-lg bg-white bg-opacity-20"
                  variants={quoteVariants}
                >
                  <div className="flex flex-col justify-between flex-1 p-6 bg-opacity-70 lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <motion.blockquote
                        className="flex-1 mt-8"
                        variants={quoteVariants}
                      >
                        <p className="text-lg leading-relaxed text-white font-pj">
                          {testimonial.quote}
                        </p>
                      </motion.blockquote>
                    </div>

                    <div className="flex items-center mt-8">
                      <div className="flex-shrink-0">
                        <img
                          className="object-cover rounded-full w-16 h-16 border-4"
                          src={testimonial.imageSrc}
                        />
                      </div>
                      <div className="ml-4">
                        <p className="text-base font-semibold text-white font-pj">
                          {testimonial.author}
                        </p>
                        <p className="mt-0.5 text-sm font-pj text-white">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Testimonials;
