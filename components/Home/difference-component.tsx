import React from "react";
import CustomButton from "../CustomButton";
import Image from "next/image";
import { differenceComponentType } from "@/types/home";
import { motion } from "framer-motion";

export default function DifferenceComponent({
  heading,
  subheading,
  text1,
  text2,
  classNameImg,
  image,
  index,
}: differenceComponentType) {
  return (
    <motion.div
      // initial={{ opacity: 0.1 }}
      // whileInView={{ opacity: 1 }}
      // viewport={{ once: false, amount: 0.4 }}
      // transition={{ duration: 0.7, ease: "easeInOut" }}
      className={`w-full rounded-[12px] sticky top-1/4 pt-[${index * 2}rem] bg-gradient-to-br from-button-secondary h-full to-button-primary p-1`}
    >
      <div className="grid grid-cols-2 max-md:grid-cols-1 h-full w-full rounded-[12px] bg-gradient-to-br p-6 gap-6 from-white to-bg3">
        <div className="w-full flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <div className="font-medium text-primary1 uppercase">{heading}</div>
            <div className="font-semibold text-xl leading-[1.1]">
              {subheading}
            </div>
            <div className="text-gray2">{text1}</div>
            <div className="text-gray2">{text2}</div>
          </div>

          <div className="flex gap-4">
            <CustomButton text={"Craft Your Story"} href={"/"} />
            <button className="bg-button-secondary px-4 py-2 rounded-[4px]">
              Craft Your Story
            </button>
          </div>
        </div>
        <Image
          src={image}
          className={`${classNameImg || ""} w-full h-auto object-contain`}
          alt={"image"}
          height={0}
          width={0}
          sizes="100%"
        />
      </div>
    </motion.div>
  );
}
