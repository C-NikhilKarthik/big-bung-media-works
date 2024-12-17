import React from "react";
import Marquee from "../ui/marquee";
import Image from "next/image";

export default function Scroll() {
  const data: string[] = [
    "/Logos1.png",
    "/Logos2.png",
    "/Logos3.png",
    "/Logos4.png",
    "/Logos5.png",
    "/Logos6.png",
  ];
  return (
    <section className="w-full flex flex-col gap-7 py-10 overflow-clip border-b border-b-[rgba(255,180,46,0.30)] [background:radial-gradient(39.56%_66.68%_at_50%_116.68%,rgba(255,180,46,0.30)_0%,rgba(255,255,255,0.30)_100%),#FFF;]">
      <div className="text-center font-semibold">
        Stories we&apos;ve told so for...
      </div>
      <Marquee className="[--duration:40s] h-14">
        {/* <div className="[padding-block:1rem] flex flex-col gap-[2vw] h-max flex-nowrap animate-infinite-scroll-y direction-reverse"> */}
        {data?.map((item: string, index: number) => (
          <Image
            className={`h-full w-auto object-cover rounded-lg`}
            alt={item}
            src={`/Home/Scroll${item}`}
            key={index}
            height={0}
            width={0}
            sizes="100%"
            // placeholder="blur"
            // blurDataURL="/over-the-years/loading.jpg"
          />
        ))}
      </Marquee>
    </section>
  );
}
