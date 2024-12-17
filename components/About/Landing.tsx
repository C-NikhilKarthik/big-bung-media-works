"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
export default function Landing() {
  return (
    <section className="relative pb-40">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-xl font-semibold px-4 text-gray1 max-w-8xl w-full mx-auto leading-[1.2] text-center"
      >
        EMPOWERING BRANDS WITH PERFORMACE-DRIVEN STORYTELLING THAT RESONATES AND
        DELIVERS RESULTS
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="max-w-3xl w-full mx-auto text-center mt-4 text-gray2 text-sm"
      >
        Ut quam at, consectetur est. placerat ex. placerat. commodo consectetur
        odio maximus laoreet faucibus Nam eget ex lacus at, viverra placerat
        hendrerit nisl. vitae varius tempor elit enim. hendrerit nec non
        lobortis, dolor ex faucibus Sed urna. ex. ex sollicitudin. ipsum odio
        convallis. Nunc maximus nibh nisi Lorem quis sit sapien dolor Ut Sed sit
        vitae Donec risus ex.
      </motion.div>

      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="w-[250px] max-md:hidden aspect-square absolute bottom-0 left-0"
      >
        <Image
          width={0}
          height={0}
          sizes="100%"
          alt="image1"
          src={"/About/image1.png"}
          className="w-full h-full"
        />
      </motion.div>

      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="w-[250px] max-md:hidden aspect-square absolute bottom-0 right-0"
      >
        <Image
          width={0}
          height={0}
          sizes="100%"
          alt="image2"
          src={"/About/image2.png"}
          className="w-full h-full"
        />
      </motion.div>
    </section>
  );
}
