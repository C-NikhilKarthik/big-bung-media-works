"use client";

import React, { useEffect, useState } from "react";
import { getHomeDifferences } from "@/app/action/home";
import { differences } from "@/types/home";
import DifferenceComponent from "./difference-component";
import GradientBackground from "../gradient-bg";
import CustomButton from "../CustomButton";
import { motion } from "framer-motion";

const DifferencePage = () => {
  const [difference, setDifferences] = useState<differences[]>([]);

  useEffect(() => {
    async function fetchDifferences() {
      try {
        const response = await getHomeDifferences();
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
    <section className="w-full flex flex-col gap-4 pt-10 relative px-4">
      <GradientBackground />

      <div className="max-w-8xl flex flex-col gap-6 w-full m-auto py-10">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-primary1 text-2xl text-center font-semibold"
        >
          The Big Bung Difference
        </motion.div>
      </div>
      <div
        className={`mx-auto max-w-8xl w-full grid grid-cols-1 auto-rows-[minmax(max-content,2fr)] gap-20 pb-[${difference?.length}*2rem]`}
      >
        {difference.map((item, index) => (
          <DifferenceComponent
            key={index}
            index={index + 1}
            heading={item?.heading}
            subheading={item?.subheading}
            text1={item?.content[0]}
            text2={item?.content[1]}
            image={item?.photoUrl}
            classNameImg={item?.classNameImg}
          />
        ))}
      </div>

      <CustomButton
        text="The difference we create"
        className="w-fit mx-auto"
        href={"/"}
      />
    </section>
  );
};

export default DifferencePage;
