"use client";
import React, { useEffect, useState } from "react";
import Component from "./Component";
import { portfolioType } from "@/types/portfolio";
import { getPortfolios } from "@/app/action/portfolio";
import { motion } from "framer-motion";

const filterOptions = [
  "Videography",
  "Photography",
  "Branding",
  "Health & Wellness",
  "Productivity",
  "Content Creation",
];

export default function Filters() {
  const [activeFilter, setActiveFilter] = useState("All");

  const [portfolios, setPortfolios] = useState<portfolioType[]>([]);

  useEffect(() => {
    async function fetchDifferences() {
      try {
        const response = await getPortfolios();
        if (response.success && Array.isArray(response.portfolio)) {
          setPortfolios(response.portfolio);
        } else {
          console.error("Invalid response format:", response);
        }
      } catch (error) {
        console.error("Error fetching storyteller:", error);
      }
    }

    fetchDifferences();
  }, []);

  return (
    <section className="w-full pt-8 mb-0">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.3, type: "spring", stiffness: 100 }}
        className="flex max-md:flex-col md:items-center w-full px-4 border-b border-b-primary3"
      >
        <span className="flex-none">Filter by:</span>
        <div className="flex gap-4 md:p-4 max-md:py-4 rounded-lg w-full flex-wrap">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all 
                ${
                  activeFilter === filter
                    ? "bg-primary1 text-bg3"
                    : "bg-bg3 text-primary1 hover:bg-primary1 hover:text-bg3"
                }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </motion.div>
      {portfolios?.map((item: portfolioType, index: number) => (
        <motion.div
          key={index}
          initial={{ x: index % 2 ? "-100%" : "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 1,
            duration: 0.3,
            type: "spring",
            stiffness: 100,
          }}
        >
          <Component {...item} />
        </motion.div>
      ))}
      {/* <div className="mt-8 text-center">
        <p className="text-lg">
          Showing results for:{" "}
          <span className="font-bold text-primary1">{activeFilter}</span>
        </p>
      </div> */}
    </section>
  );
}
