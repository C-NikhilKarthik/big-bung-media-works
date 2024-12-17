"use client";
import React, { useEffect, useState } from "react";
import Component from "./component";
import CustomButton from "@/components/CustomButton";
import { difference_component } from "@/types/about";
import { getAboutDifference } from "@/app/action/about";
import GradientBackground from "@/components/gradient-bg";
import { motion } from "framer-motion";

export default function Page() {
  const [difference, setDifferences] = useState<difference_component[]>([]);

  useEffect(() => {
    async function fetchDifferences() {
      try {
        const response = await getAboutDifference();
        if (response.success && Array.isArray(response.differences)) {
          setDifferences(response.differences);
        } else {
          console.error("Invalid response format:", response);
        }
      } catch (error) {
        console.error("Error fetching differences:", error);
      }
    }

    fetchDifferences();
  }, []);
  return (
    <section className="flex flex-col gap-10 mt-20 items-center relative">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <div className="font-semibold text-2xl text-center leading-[1]">
          The difference
        </div>
        <div className="font-semibold text-2xl text-center">we create</div>
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-center"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. F. Nibh metus a
        semper purus
      </motion.div>

      <GradientBackground />
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-36 gap-y-10">
        {difference?.map((item: difference_component, index: number) => (
          <motion.div
            initial={{ x: index % 2 ? "100%" : "-100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            key={index}
          >
            <Component {...item} />
          </motion.div>
        ))}
      </div>

      <CustomButton
        href="/contact"
        className="text-sm"
        text={"Let's make you different"}
      />
    </section>
  );
}
