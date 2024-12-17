import { difference_component } from "@/types/about";
import Image from "next/image";
import React from "react";

export default function Component({
  title,
  heading1,
  heading2,
  description,
  image,
}: difference_component) {
  return (
    <div className="w-full p-4 space-y-4 bg-bg3 rounded-tr-[80px] rounded-bl-[80px] rounded-tl-[8px] rounded-br-[8px]">
      <div className="">{title}</div>
      <div className="text-left leading-[1.1]">
        <div className="text-primary1 text-xl">{heading1}</div>
        <div className="text-primary1 text-xl">{heading2}</div>
      </div>

      <div className="text-sm text-gray2">{description}</div>

      <Image
        className="h-[200px] w-auto object-cover"
        height={100}
        width={100}
        alt={image}
        src={image}
      />
    </div>
  );
}
