import About from "@/components/About/About";
import Landing from "@/components/About/Landing";
import React from "react";
import StoryTeller from "@/components/About/story-tellers";
import Difference from "@/components/About/difference";
import { Metadata } from "next";

export default function Page() {
  return (
    <main className="w-full pt-32 px-4 overflow-x-hidden">
      <Landing />
      <About />
      <StoryTeller />
      <Difference />
    </main>
  );
}

export const metadata: Metadata = {
  title: "About | Big Bung Media Works",
  description: "Big Bung Media Works is a digital marketing agency.",
};
