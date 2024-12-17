"use client";
import * as React from "react";
import { FiArrowRight } from "react-icons/fi";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { getHomeClientResults } from "@/app/action/home";
import { HomeClientResult } from "@/types/home";
import Autoplay from "embla-carousel-autoplay";

export function ClientResults() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [clientResults, setClientResults] = React.useState<HomeClientResult[]>(
    []
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    api.on("settle", () => {
      if (api.selectedScrollSnap() === count - 1) {
        api.scrollTo(0);
      }
    });
  }, [api, count]);

  React.useEffect(() => {
    async function fetchDifferences() {
      try {
        const response = await getHomeClientResults();
        if (response.success && Array.isArray(response.clientResults)) {
          setClientResults(response.clientResults);
        } else {
          console.error("Invalid response format:", response);
        }
      } catch (error) {
        console.error("Error fetching client results:", error);
      }
    }

    fetchDifferences();
  }, []);

  return (
    <div className="bg-gradient-to-r py-20 from-bg3 px-4 to-white">
      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        setApi={setApi}
        className="w-full max-w-6xl mx-auto"
      >
        <CarouselContent>
          {clientResults?.map((item, index) => (
            <CarouselItem key={index}>
              <Card className="bg-gradient-to-r h-full !rounded-[16px] from-primary3 to-bg4 p-[3px]">
                <CardContent className="flex max-md:flex-col h-full gap-6 items-center rounded-[12px] p-10 max-md:p-5 bg-gradient-to-br from-white to-bg3">
                  <div className="basis-1/2 flex-1 flex flex-col justify-between">
                    <div className="">
                      <div className="text-transparent leading-[1.1] text-3xl font-semibold bg-clip-text bg-gradient-to-br from-primary3 to-primary1">
                        {item?.heading1}
                      </div>
                      <div className="text-transparent text-sm font-medium bg-clip-text bg-gradient-to-br from-primary3 to-primary1">
                        {item?.heading2}
                      </div>
                    </div>

                    <div className="space-y-3 text-gray2">
                      <div className="">{item?.description1}</div>
                      <div>{item?.description2}</div>
                      <div className="flex gap-2 items-center">
                        {item?.name} -
                        <Image
                          src={item?.companyLogoUrl}
                          alt="quote"
                          width={0}
                          height={0}
                          sizes="100%"
                          className="h-full w-auto"
                        />
                      </div>

                      <Link
                        href={item?.link}
                        className="bg-button-secondary flex items-center justify-center w-fit px-6 rounded-[4px] py-2"
                      >
                        Read More <FiArrowRight />
                      </Link>
                    </div>
                  </div>
                  <Image
                    src={item?.imageUrl}
                    alt="Client Results"
                    width={0}
                    height={0}
                    sizes="100%"
                    className="flex-1 basis-1/2 h-auto w-full"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="max-md:hidden" />
        <CarouselNext className="max-md:hidden" />
      </Carousel>
      <div className="text-lg md:text-2xl text-center font-semibold mt-10 leading-[1.1]">
        Client Success <span className="text-primary1">stories</span>
      </div>
      <div className="text-lg md:text-2xl text-center font-semibold pb-6 leading-[1.1]">
        - Your wins are our wins
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              current === index + 1 ? "bg-primary3" : "bg-gray-300"
            }`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
