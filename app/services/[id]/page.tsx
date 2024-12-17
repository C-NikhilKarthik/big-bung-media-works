"use client";
import { PageProps } from "@/types/portfolio";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CustomButton from "@/components/CustomButton";
import ProductComponent from "@/components/Home/productComponent";
import Image from "next/image";
import { getService } from "@/app/action/service";
import { servicePageType } from "@/types/service";
import Carousel from "@/components/service/carousel";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { loop: true };

export default function Page({ params }: PageProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Stagger each card by 0.2s
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const [service, setService] = useState<servicePageType>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStorybook() {
      try {
        const response = await getService(params.id);
        if (response.success && Array.isArray(response.service)) {
          setService(response.service[0]);
        } else {
          console.error("Invalid response format:", response);
        }
      } catch (error) {
        console.error("Error fetching service:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchStorybook();
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl font-semibold">Loading...</div>
      </div>
    );
  }

  return (
    <main>
      <section className="bg-white pt-32 py-20 max-w-8xl overflow-x-hidden mx-auto w-full flex max-md:flex-col gap-10 space-y-5 px-4">
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="basis-2/5"
        >
          <Image
            src={
              service?.imageMain ||
              "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
            }
            alt="video"
            width={0}
            height={0}
            sizes="100%"
            className="w-full h-auto"
          />
        </motion.div>
        <div className="basis-3/5 flex flex-col gap-5">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <div className="text-2xl text-primary1 font-semibold leading-[1.2]">
              {service?.mainTitle1}
            </div>
            <div className="text-2xl font-semibold leading-[1.2]">
              {service?.mainTitle2}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            {service?.description}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-3"
          >
            <CustomButton
              text="Let's create your's"
              href="/"
              className="py-4 px-6"
            />
          </motion.div>
        </div>
      </section>
      <section className="bg-bg3 py-20 space-y-5 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-xl font-semibold leading-[1.2] text-center"
        >
          {service?.sectionTitle1}{" "}
          <span className="text-primary1">{service?.sectionTitle2}</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          {service?.sectionDescription}
        </motion.div>
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {service?.sectionCards?.map((data, i) => (
            <motion.div
              key={i}
              custom={i} // Pass index for stagger effect
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }} // Trigger animation when 20% is visible
              variants={cardVariants}
            >
              <ProductComponent
                image={data?.photo}
                heading={data?.heading}
                description={data?.description}
                text={"Lets create "}
                href={"/"}
              />
            </motion.div>
          ))}
        </div>
      </section>
      <div className="max-w-5xl px-4 overflow-x-hidden space-y-10 mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-xl font-semibold leading-[1.1] md:w-1/2"
        >
          <span className="text-primary1">{service?.section2Title1} </span>
          {service?.section2Title2}
        </motion.div>

        <div className="grid gap-4 w-full grid-cols-2 max-md:grid-cols-1">
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="space-y-4"
          >
            {service?.images
              ?.filter((_, i) => i % 2 === 0)
              .map((data, i) => (
                <Image
                  key={i}
                  src={data.photo}
                  alt="video"
                  width={0}
                  height={0}
                  sizes="100%"
                  className="w-full h-[300px] object-cover rounded-lg"
                />
              ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="space-y-4"
          >
            {service?.images
              ?.filter((_, i) => i % 2 !== 0)
              .map((data, i) => (
                <Image
                  key={i}
                  src={data.photo}
                  alt="video"
                  width={0}
                  height={0}
                  sizes="100%"
                  className="w-full h-[300px] object-cover rounded-lg"
                />
              ))}
          </motion.div>
        </div>
        <div className="flex max-md:flex-col gap-4 justify-between !mt-20 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="space-y-5 basis-1/2"
          >
            <div className="font-semibold text-lg leading-[1.2]">
              <div className="text-primary1">{service?.section3Title1}</div>
              <div className="">{service?.section3Title2}</div>
            </div>

            <div>{service?.section3Description}</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <Image
              src={
                service?.section3Image ||
                "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
              }
              alt="video"
              width={0}
              height={0}
              sizes="100%"
              className="w-auto h-full max-md:mx-auto"
            />
          </motion.div>
        </div>
      </div>

      <Carousel slides={service?.section4} options={OPTIONS} />

      <div className="flex max-md:flex-col px-4 pb-10 justify-center items-center">
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <Image
            src={
              service?.finalPhoto ||
              "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
            }
            alt="video"
            width={0}
            height={0}
            sizes="100%"
            className="w-auto h-[300px]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="flex flex-col max-w-xl"
        >
          <div className="font-medium text-xl leading-[1.2]">
            {service?.finalTitle}
          </div>
          <div className="text-lg mb-3 text-primary1 font-medium">
            {service?.finalDescription}
          </div>
          <CustomButton
            text="Let's Talk!"
            href="/"
            className="py-2 w-fit px-6"
          />
        </motion.div>
      </div>
    </main>
  );
}
