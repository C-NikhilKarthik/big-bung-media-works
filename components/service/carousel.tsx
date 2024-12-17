import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./carousel.css";
import Image from "next/image";

type PropType = {
  slides:
    | {
        heading: string;
        index: number;
        description: string;
        photo: string;
      }[]
    | undefined;
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [Autoplay({ delay: 3000 })]);

  return (
    <div className="embla !my-3">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides?.map((data, index) => (
            <div className="embla__slide" key={index}>
              <div
                className={`embla__slide__number h-full ${index % 2 ? "md:flex-row-reverse" : ""}`}
              >
                <div
                  className={`bg-bg3 flex-1 flex h-full ${index % 2 === 0 ? "justify-end" : ""}`}
                >
                  <div
                    className={`flex-1 relative flex items-center h-full py-4 ${index % 2 !== 0 ? "justify-end" : ""} flex-col max-w-3xl justify-between  pl-8 md:pl-16`}
                  >
                    <div className="text-primary1 text-base w-fit">
                      {data.heading}
                    </div>
                    <Image
                      src={data.photo}
                      alt="video"
                      width={0}
                      height={0}
                      sizes="100%"
                      className="w-auto h-[100px] object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div
                  className={`bg-primary3 flex-1 flex h-full ${index % 2 !== 0 ? "justify-end" : ""}`}
                >
                  <div
                    className={`flex-1 relative text-sm md:text-base w-full font-normal h-full ${index % 2 !== 0 ? "pl-10 md:pr-16" : "pl-10 md:pl-16"} items-center py-4 flex max-w-3xl justify-between`}
                  >
                    {data?.description}
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-y-1/2 -translate-x-1/2 top-1/2 text-lg font-bold bg-white border-2 rounded-full border-primary1 p-8 text-primary1 flex items-center justify-center w-12 h-12">
                  {data.index}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
