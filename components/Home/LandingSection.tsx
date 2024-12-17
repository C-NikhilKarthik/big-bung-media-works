"use client";
import Image from "next/image";
import React from "react";
import CustomButton from "../CustomButton";
import PulsingBackground from "../pulse";
import { motion } from "framer-motion";

export default function LandingSection() {
  return (
    <section className="max-w-8xl w-full mx-auto px-4">
      <PulsingBackground />
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="mx-auto max-w-2xl mb-6 items-center flex flex-col gap-8"
      >
        <div className="text-3xl font-medium text-secondary1 text-center leading-[1.1] tracking-tight">
          Creating <span className="text-primary1">Stories</span> Driving Impact
        </div>

        <motion.span
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-center text-secondary1 w-full max-w-[450px]"
        >
          Lorem ipsum dolor sit amet, consectetur.Nibh pharetra ipsum erat
          vulputate tempus. Fringilla.
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <CustomButton
            href="/contact"
            className="text-sm py-3 w-fit"
            text={"Craft your Story"}
          />
        </motion.div>
      </motion.div>
      <div className="max-md:grid hidden grid-cols-2 gap-2">
        <Image
          className="w-full h-full object-cover rounded-[22px]"
          height={0}
          width={0}
          sizes="100%"
          alt="image1"
          src={"/Home/Landing/image1.png"}
        />
        <Image
          className="w-full h-full object-cover rounded-[22px]"
          height={0}
          width={0}
          sizes="100%"
          alt="image1"
          src={"/Home/Landing/image2.png"}
        />
        <Image
          className="w-full h-full object-cover rounded-[22px]"
          height={0}
          width={0}
          sizes="100%"
          alt="image1"
          src={"/Home/Landing/image3.png"}
        />
        <Image
          className="w-full h-full object-cover rounded-[22px]"
          height={0}
          width={0}
          sizes="100%"
          alt="image1"
          src={"/Home/Landing/image4.png"}
        />
        <Image
          className="w-full h-full object-cover rounded-[22px]"
          height={0}
          width={0}
          sizes="100%"
          alt="image1"
          src={"/Home/Landing/image5.png"}
        />
        <Image
          className="w-full h-full object-cover rounded-[22px]"
          height={0}
          width={0}
          sizes="100%"
          alt="image1"
          src={"/Home/Landing/image6.png"}
        />
      </div>
      <div className="hidden md:grid grid-cols-5 gap-6">
        <div className="w-full flex flex-col gap-6 justify-end">
          <div className="bg-gray-300 rounded-[22px] overflow-clip h-[350px] w-full">
            <Image
              className="w-full h-full object-cover"
              height={0}
              width={0}
              sizes="100%"
              alt="image1"
              src={"/Home/Landing/image1.png"}
            />
          </div>
          <div className="bg-gray-300 rounded-[22px] overflow-clip h-[150px] w-full">
            <Image
              className="w-full h-full object-cover"
              height={0}
              width={0}
              sizes="100%"
              alt="image2"
              src={"/Home/Landing/image2.png"}
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-6 justify-end">
          <div className="bg-gray-300 rounded-[22px] overflow-clip h-[350px] w-full">
            <Image
              className="w-full h-full object-cover"
              height={0}
              width={0}
              sizes="100%"
              alt="image3"
              src={"/Home/Landing/image3.png"}
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-6 justify-end">
          <div className="bg-gray-300 rounded-[22px] overflow-clip h-[280px] w-full">
            <Image
              className="w-full h-full object-cover"
              height={0}
              width={0}
              sizes="100%"
              alt="image4"
              src={"/Home/Landing/image4.png"}
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-6 justify-end">
          <div className="bg-gray-300 rounded-[22px] overflow-clip h-[350px] w-full">
            <Image
              className="w-full h-full object-cover"
              height={0}
              width={0}
              sizes="100%"
              alt="image5"
              src={"/Home/Landing/image5.png"}
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-6 justify-end">
          <div className="bg-gray-300 rounded-[22px] overflow-clip h-[350px] w-full">
            <Image
              className="w-full h-full object-cover"
              height={0}
              width={0}
              sizes="100%"
              alt="image6"
              src={"/Home/Landing/image6.png"}
            />
          </div>
          <div className="bg-gray-300 rounded-[22px] overflow-clip h-[150px] w-full">
            <Image
              className="w-full h-full object-cover"
              height={0}
              width={0}
              sizes="100%"
              alt="image7"
              src={"/Home/Landing/image7.png"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
