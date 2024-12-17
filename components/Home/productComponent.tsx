import Image from "next/image";
import React from "react";
import CustomButton from "../CustomButton";
import { productComponentType } from "@/types/home";

export default function ProductComponent({
  image,
  heading,
  description,
  text,
  href,
}: productComponentType) {
  return (
    <div className="h-full w-full rounded-[12px] bg-gradient-to-br from-button-secondary to-button-primary p-1">
      <div className="flex h-full w-full rounded-[12px] bg-white back">
        <div className="flex flex-col bg-gradient-to-br rounded-[12px] from-white/40 to-white/50 px-4 py-4 items-center justify-between gap-4 text-center">
          <Image
            className="w-[160px] aspect-square"
            alt={image}
            src={image}
            width={0}
            height={0}
            sizes="100%"
          />
          <div className="text-base font-medium text-button-primary">
            {heading}
          </div>
          <div className="text-sm font-medium text-gray3">{description}</div>
          <div className="flex gap-6">
            <CustomButton text={text} href={href} className="text-sm" />
            <button className="bg-button-secondary text-gray3 text-sm px-3 py-1 rounded-[4px]">
              Explore more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
