import { story_component } from "@/types/about";
import Image from "next/image";
import React from "react";
import { FaLinkedinIn, FaXTwitter, FaDribbble } from "react-icons/fa6";

export default function Component({
  name,
  role,
  description,
  image,
  twitter,
  linkedin,
  dribble,
}: story_component) {
  return (
    <div className="w-full flex flex-col items-center text-center p-4">
      <Image
        className="rounded-full object-cover"
        height={100}
        width={100}
        alt={name || "Profile"}
        src={image}
      />
      <div className="text-base font-semibold">{name}</div>
      <div className="text-sm font-medium text-gray-600">{role}</div>
      <div className="text-sm text-gray-500 my-3">{description}</div>
      <div className="flex gap-4">
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="text-primary1 text-[24px] cursor-pointer hover:scale-110 transition-transform" />
        </a>
        <a href={twitter} target="_blank" rel="noopener noreferrer">
          <FaXTwitter className="text-primary1 text-[24px] cursor-pointer hover:scale-110 transition-transform" />
        </a>
        <a href={dribble} target="_blank" rel="noopener noreferrer">
          <FaDribbble className="text-primary1 text-[24px] cursor-pointer hover:scale-110 transition-transform" />
        </a>
      </div>
    </div>
  );
}
