import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* question section */}
      <div
        onClick={() => setShow(!show)}
        className="flex justify-between items-center cursor-pointer"
      >
        <h1 className="text-lg font-semibold text-green">{question}</h1>
        <BiChevronDown
          className={`text-3xl transition-all duration-500 ${
            show ? "rotate-180" : ""
          }`}
        ></BiChevronDown>
      </div>

      {/* answer section */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-clip"
          >
            <ul className="list-disc pl-5 pt-3 text-sm md:text-base text-gray-400">
              {/* Split the answer by lines and map through them */}
              {answer.split('\n').map((line, index) => (
                <li key={index}>{line.trim()}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Accordion;
