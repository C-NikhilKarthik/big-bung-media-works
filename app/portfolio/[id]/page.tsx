"use client";
import { PageProps } from "@/types/portfolio";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Page({ params }: PageProps) {
  return (
    <main>
      <section className="bg-bg4 pt-32 py-20 space-y-5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <div className="text-xl font-semibold leading-[1.2] text-center">
            Launching a Unique Identity:
          </div>
          <div className="text-xl font-semibold leading-[1.2] text-center">
            A Stellar SaaS Design System
          </div>
          <div className="text-xl font-semibold leading-[1.2] text-center">
            for{" "}
            {params.id
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join("")}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="max-w-4xl mx-auto text-sm font-medium text-center px-2"
        >
          Ut quam at, consectetur est. placerat ex. placerat. commodo
          consectetur odio maximus laoreet faucibus Nam eget ex lacus at,
          viverra placerat hendrerit nisl. vitae varius tempor elit enim.
          hendrerit nec non lobortis, dolor ex faucibus Sed urna. ex. ex
          sollicitudin. ipsum odio convallis. Nunc maximus nibh nisi Lorem quis
          sit sapien dolor Ut Sed sit vitae Donec risus ex.
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="max-w-2xl mx-auto text-sm font-medium flex max-md:flex-col max-md:items-center max-md:gap-4 justify-between"
        >
          <div className="flex flex-col">
            <span className="text-gray2">Date</span>
            <span className="text-gray1">2022</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray2">Client</span>
            <span className="text-gray1">
              {params.id
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join("")}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray2">Category</span>
            <span className="text-gray1">Branding</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <Image
            className="h-10 w-auto mx-auto"
            alt={"image"}
            src={`/Portfolio/${params?.id}.png`}
            width={0}
            height={0}
            sizes="100%"
          />
        </motion.div>
      </section>

      <section>
        <div className="max-w-8xl overflow-hidden mx-auto w-full flex flex-col px-4 space-y-5 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-center font-medium text-lg"
          >
            Crafting a Unique Identify
          </motion.div>

          <div className="flex flex-col gap-12">
            <div className="w-full flex max-md:flex-col gap-20">
              <motion.div
                initial={{ opacity: 0, x: "-100%" }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                <Image
                  height={0}
                  width={0}
                  alt="image"
                  className="w-full flex-1 h-auto"
                  src={"/portfolios/main1.png"}
                  sizes="100%"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="my-auto flex-1 text-sm"
              >
                Sed viverra nec ipsum faucibus nec Nullam commodo enim. placerat
                eu lacus hendrerit sollicitudin. gravida diam non. vitae Sed
                viverra nec ipsum faucibus nec Nullam commodo enim. placerat eu
                lacus hendrerit Sed viverra nec ipsum faucibus nec Nullam
                commodo enim. placerat eu lacus hendrerit sollicitudin. gravida
                diam non. vitae
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="flex text-center mx-auto max-w-2xl flex-col gap-4"
            >
              <div className="font-medium text-lg">
                Unlocking A New Era of Branding
              </div>
              <div className="text-sm">
                Sed viverra nec ipsum faucibus nec Nullam commodo enim. placerat
                eu lacus hendrerit sollicitudin. gravida diam non. vitae Sed
                viverra nec ipsum faucibus nec Nullam commodo enim. placerat eu
                lacus hendrerit{" "}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <Image
                height={0}
                width={0}
                alt="image"
                className="w-full max-w-5xl mx-auto flex-1 h-auto"
                src={"/portfolios/image1.png"}
                sizes="100%"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="flex text-center mx-auto max-w-2xl flex-col gap-4"
            >
              <div className="font-medium text-lg">
                Scalable design for 360° communications
              </div>
              <div className="text-sm">
                Sed viverra nec ipsum faucibus nec Nullam commodo enim. placerat
                eu lacus hendrerit sollicitudin. gravida diam non. vitae Sed
                viverra nec ipsum faucibus nec Nullam commodo enim. placerat eu
                lacus hendrerit{" "}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <Image
                height={0}
                width={0}
                alt="image"
                className="w-full max-w-5xl mx-auto flex-1 h-auto"
                src={"/portfolios/image2.png"}
                sizes="100%"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="flex text-center mx-auto max-w-2xl flex-col gap-4"
            >
              <div className="text-sm">
                Sed viverra nec ipsum faucibus nec Nullam commodo enim. placerat
                eu lacus hendrerit sollicitudin. gravida diam non. vitae Sed
                viverra nec ipsum faucibus nec Nullam commodo enim. placerat eu
                lacus hendrerit{" "}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
