import Filters from "@/components/Portfolio/Filters";
import Landing from "@/components/Portfolio/Landing";
import { Metadata } from "next";
import React from "react";

export default function Page() {
  return (
    <main className="pt-20 overflow-x-hidden w-full">
      <Landing />
      <Filters />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Portfolio | Big Bung Media Works",
  description: "Big Bung Media Works is a digital marketing agency.",
};
