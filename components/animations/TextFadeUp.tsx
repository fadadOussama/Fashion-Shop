"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function FadeUpStagger() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <motion.p ref={ref}></motion.p>
      <motion.h1
        className="text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
        variants={{
          hidden: { opacity: 0, y: 10 },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              duration: 1.7,
            },
          },
        }}
      >
        MAKE YOURESELF STYLISH WITH OUR PRODUCTS
      </motion.h1>
    </motion.div>
  );
}
