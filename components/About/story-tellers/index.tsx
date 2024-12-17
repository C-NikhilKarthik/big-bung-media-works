"use client";
import React, { useEffect, useState } from "react";
import Component from "./Component";
import { story_component } from "@/types/about";
import { getAboutStoryTeller } from "@/app/action/about";
import { motion } from "framer-motion";

export default function Page() {
  const [storyTellers, setStoryTellers] = useState<story_component[]>([]);

  useEffect(() => {
    async function fetchDifferences() {
      try {
        const response = await getAboutStoryTeller();
        if (response.success && Array.isArray(response.storyTeller)) {
          setStoryTellers(response.storyTeller);
        } else {
          console.error("Invalid response format:", response);
        }
      } catch (error) {
        console.error("Error fetching storyteller:", error);
      }
    }

    fetchDifferences();
  }, []);
  return (
    <section className="space-y-[14px]">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="font-semibold text-2xl text-center"
      >
        The story Tellers
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
      <div className="max-w-8xl mx-auto w-full grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        {storyTellers?.map((item: story_component, index: number) => (
          <Component {...item} key={index} />
        ))}
      </div>
    </section>
  );
}
