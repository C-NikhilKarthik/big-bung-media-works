"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <section className="py-32">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="max-w-8xl text-center leading-[1.3] mx-auto text-lg md:text-3xl font-bold"
      >
        <div className="">
          The <span className="text-primary1">Stories</span> we&apos;ve said -
        </div>
        <div className="">from startup to F500</div>
      </motion.div>
    </section>
  );
}
