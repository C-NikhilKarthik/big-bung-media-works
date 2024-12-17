"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CustomButton from "../CustomButton";
import ConsultationCard from "./consultation-card";
import { motion } from "framer-motion";
import { getHomeConsultation } from "@/app/action/home";
import { consultation } from "@/types/home";

export default function Consultation() {
  const cardVariants = {
    hidden: { opacity: 0, y: -100 },
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

  const [consultation, setConsultation] = useState<consultation[]>([]);

  useEffect(() => {
    async function fetchStorybook() {
      try {
        const response = await getHomeConsultation();
        if (response.success && Array.isArray(response.consultation)) {
          setConsultation(response.consultation);
        } else {
          console.error("Invalid response format:", response);
        }
      } catch (error) {
        console.error("Error fetching consultations:", error);
      }
    }

    fetchStorybook();
  }, []);

  return (
    <div className="bg-bg4 p-14 max-md:p-4">
      <div className="rounded-[20px] bg-white max-w-8xl mx-auto p-12 max-md:p-4 space-y-20">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <Image
            className="w-full max-w-5xl mx-auto h-auto"
            alt={"image consultation"}
            src={"/Home/Consultation.png"}
            width={0}
            height={0}
            sizes="100%"
          />
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="text-center">
            <div className="text-lg md:text-2xl font-semibold leading-[1]">
              Get Started.
            </div>
            <div className="text-lg md:text-2xl font-semibold">
              Book Consultation.
            </div>
          </div>
          <CustomButton
            text={"Book a consultation - it's free"}
            href={"/contact"}
            className="w-fit mx-auto text-center"
          />
        </motion.div>

        <div className="w-full flex max-md:flex-col gap-6">
          {consultation
            ?.sort((a, b) => a.index - b.index) // Sort based on index
            ?.map((data, i) => (
              <motion.div
                key={i}
                custom={i} // Pass index for stagger effect
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: true }} // Trigger animation when 20% is visible
                variants={cardVariants}
              >
                <ConsultationCard key={data.index} {...data} />
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}
