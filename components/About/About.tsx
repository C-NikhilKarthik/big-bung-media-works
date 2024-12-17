"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="w-full">
      <div className="max-w-8xl w-full overflow-x-hidden mx-auto gap-20 flex max-md:flex-col">
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="basis-1/2 max-md:basis-full"
        >
          <div className="text-2xl font-semibold leading-[1.1]">
            About Big Bung
          </div>
          <div className="text-base my-6 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            varius faucibus massa sollicitudin amet augue. Nibh metus a semper
            purus mauris duis. Lorem eu neque, tristique quis duis. Nibh
            scelerisque ac adipiscing velit non nulla in amet pellentesque. Sit
            turpis pretium eget maecenas. Vestibulum dolor mattis consectetur
            eget commodo vitae.
          </div>
          <div className="text-base text-justify">
            Amet pellentesque sit pulvinar lorem mi a, euismod risus rhoncus.
            Elementum ullamcorper nec, habitasse vulputate. Eget dictum quis est
            sed egestas tellus, a lectus. Quam ullamcorper in fringilla arcu
            aliquet fames arcu.Lacinia eget faucibus urna, nam risus nec
            elementum cras porta. Sed elementum, sed dolor purus dolor dui. Ut
            dictum nulla pulvinar vulputate sit sagittis in eleifend dignissim.
            Natoque mauris cras molestie velit. Maecenas eget adipiscing quisque
            viverra lectus arcu, tincidunt ultrices pellentesque.
          </div>
        </motion.div>
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="basis-1/2 max-md:basis-full"
        >
          <Image
            className="w-full h-auto"
            alt="About image"
            height={0}
            width={0}
            sizes="100%"
            src={"/About/AboutImage.png"}
          />
        </motion.div>
      </div>
    </section>
  );
}
