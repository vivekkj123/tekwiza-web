import React from "react";
import { motion } from 'framer-motion';

const PageHeader = ({ title }) => {
  return (
    <div className="h-30 py-2 lg:py-6 border-gray-900 border-2 text-2xl lg:text-4xl items-center px-4 lg:px-20">
      {title.split(" ").map((t) => (
        <>
        <motion.div key={t} initial="hidden" animate="visible" variants={{
        hidden: {
          scale: .8,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
            transition: {
            delay: .1
          }
        },
        }}>
          <h2>{t}</h2>
        </motion.div>
          
        </>
      ))}
    </div>
  );
};

export default PageHeader;

