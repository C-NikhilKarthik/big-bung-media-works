"use client";
import React, { useEffect, useState } from "react";
import ProductComponent from "./productComponent";
import CustomButton from "../CustomButton";
import GradientBackground from "../gradient-bg";
import { motion } from "framer-motion";
import { getHomeStroyTelling } from "@/app/action/home";
import { storyTelling } from "@/types/home";

export default function StoriesTold() {
  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Stagger each card by 0.2s
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const [stories, setStories] = useState<storyTelling[]>([]);

  useEffect(() => {
    async function fetchStorybook() {
      try {
        const response = await getHomeStroyTelling();
        if (response.success && Array.isArray(response.storyTelling)) {
          setStories(response.storyTelling);
        } else {
          console.error("Invalid response format:", response);
        }
      } catch (error) {
        console.error("Error fetching stories:", error);
      }
    }

    fetchStorybook();
  }, []);
  return (
    <section className="w-full pt-10 relative px-4">
      <GradientBackground />
      <div className="max-w-8xl flex flex-col gap-6 w-full m-auto py-10">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg font-medium text-center"
        >
          People don&apos;t buy products.{" "}
          <span className="text-primary1 font-semibold">They buy Stories.</span>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-xl font-semibold text-center"
        >
          Stories We Tell...
        </motion.div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stories?.map((data, i) => (
            <motion.div
              key={i}
              custom={i} // Pass index for stagger effect
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }} // Trigger animation when 20% is visible
              variants={cardVariants}
            >
              <ProductComponent
                image={data?.image}
                heading={data?.heading}
                description={data?.description}
                text={data?.buttonText}
                href={data?.buttonHref}
              />
            </motion.div>
          ))}
        </div>

        <CustomButton
          text={"More Stories"}
          href={"/contact"}
          className="text-base w-fit mx-auto"
        />
      </div>
    </section>
  );
}
