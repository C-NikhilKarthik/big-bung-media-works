import { portfolioType } from "@/types/portfolio";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Component({
  image,
  description,
  tags,
  link,
}: portfolioType) {
  return (
    <Link
      href={`/portfolio/${link}`}
      className="w-full group border-b relative py-10 border-primary3 px-4 text-gray1 text-sm font-medium md:px-6 flex max-md:gap-6 max-md:flex-col"
    >
      <div className="h-full z-[-1] [background:radial-gradient(39.56%_66.68%_at_50%_116.68%,rgba(255,180,46,0.30)_0%,rgba(255,255,255,0.30)_100%),#FFF;] w-full hidden group-hover:block absolute bottom-0"></div>
      <div className="pr-28 flex-none flex items-center">
        <Image
          className="md:w-[6vw] w-[150px] h-auto"
          height={0}
          width={0}
          sizes="100%"
          src={image}
          alt={image}
        />
      </div>
      <div className="flex-1">
        <div className="max-w-sm">{description}</div>
      </div>
      <div className="flex-1 flex gap-10">
        <div className="max-w-sm space-y-1">
          {tags?.map((item: string, index: number) => (
            <div key={index} className="">
              {item}
            </div>
          ))}
        </div>
        <div className="hidden group-hover:flex after:block after:w-[150%] flex-col after:h-[1px] after:bg-primary1 text-primary1">
          View Case Study
        </div>
      </div>
    </Link>
  );
}
