import { LuArrowUpRight } from "react-icons/lu";
import React from "react";
import Image from "next/image";

export default function StoryTelling() {
  return (
    <div className="bg-gradient-to-br from-primary3 to-bg3 h-[250dvh] md:h-[85dvh]">
      <div className="flex max-md:flex-col max-w-6xl h-full mx-auto leading-[1.1]">
        <div className="flex h-full flex-col basis-1/3 items-center relative p-4">
          <div className="font-medium text-xl md:text-2xl z-[1]">
            Why the story Method works!
          </div>
          <Image
            className="w-full h-auto absolute bottom-0"
            src={"/Home/StoryTelling/image1.png"}
            alt="image1"
            height={0}
            width={0}
            sizes="100%"
          />

          <button className="absolute bottom-8 bg-button-secondary rounded-[4px] px-2 py-2 text-gray2">
            Read the whole blog
          </button>
        </div>
        <div className="flex flex-col border border-gray3 max-md:border-l-0 max-md:border-r-0 md:border-t-0 md:border-b-0 basis-1/3 items-center relative">
          <Image
            className="w-full h-auto absolute top-0"
            src={"/Home/StoryTelling/image2.png"}
            alt="image2"
            height={0}
            width={0}
            sizes="100%"
          />
          <div className="absolute bottom-8 space-y-4 flex flex-col items-center">
            <div className="font-medium text-xl md:text-2xl z-[1] p-4">
              How you can tell your story!
            </div>

            <button className=" bg-button-secondary rounded-[4px] px-2 py-2 text-gray2">
              Read the whole blog
            </button>
          </div>
        </div>
        <div className="flex basis-1/3 items-center">
          <div className="flex gap-4 p-4">
            <div className="leading-[1.1] text-2xl font-medium">
              <div className="">View More</div>
              <div className="text-primary1">Story Telling in Action</div>
            </div>
            <LuArrowUpRight className="text-primary1 text-9xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
