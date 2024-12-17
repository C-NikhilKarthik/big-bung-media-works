import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Metadata } from "next";
import GradientBackground from "@/components/gradient-bg";

export default function Page() {
  return (
    <main className="w-full h-screen grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="w-full h-full min-h-screen flex items-center justify-center relative">
        <GradientBackground />
        <div className="w-full font-semibold relative text-xl md:text-3xl max-w-3xl uppercase leading-[1.1] text-center">
          your <span className="text-primary1">story</span> starts with a single
          word <span className="text-primary1">&apos;hello&apos;.</span>
        </div>
      </div>
      <div className="w-full h-full pr-10 flex flex-col items-center justify-center">
        <form className="w-3/4 max-w-lg space-y-4 relative">
          <div className="flex justify-end w-full absolute top-0 -translate-y-full -right-8 text-primary1 mb-3">
            * Required fields
          </div>
          {/* Email Input */}
          <div>
            {/* <Label htmlFor="email">Email Address</Label> */}
            <Input
              id="email"
              type="email"
              placeholder="Email Address"
              className="!border-primary1 placeholder:!text-gray2"
              required
            />
          </div>

          {/* First Name Input */}
          <div>
            {/* <Label htmlFor="first-name">First Name</Label> */}
            <Input
              id="first-name"
              type="text"
              placeholder="First name"
              className="!border-primary1 placeholder:!text-gray2"
              required
            />
          </div>

          {/* Last Name Input */}
          <div>
            {/* <Label htmlFor="last-name">Last Name</Label> */}
            <Input
              id="last-name"
              type="text"
              placeholder="Last name"
              className="!border-primary1 placeholder:!text-gray2"
              required
            />
          </div>

          {/* Phone Number Input */}
          <div>
            {/* <Label htmlFor="phone">Phone Number</Label> */}
            <Input
              id="phone"
              type="tel"
              placeholder="Phone Number"
              className="!border-primary1 placeholder:!text-gray2"
              required
            />
          </div>

          {/* Service Select */}
          <div>
            {/* <Label htmlFor="service">Service you want to inquire for</Label> */}
            <Select>
              <SelectTrigger
                className="!border-primary1 !text-gray2"
                id="service"
              >
                <SelectValue placeholder="Service you want to inquire for" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web-development">Web Development</SelectItem>
                <SelectItem value="mobile-apps">Mobile Apps</SelectItem>
                <SelectItem value="seo">SEO Optimization</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* File Upload */}
          {/* <div>
            <Input className="" id="image-upload" type="file" accept="image/*" />
          </div> */}

          {/* Message Textarea */}
          <div>
            {/* <Label htmlFor="message">Message</Label> */}
            <Textarea
              className="!border-primary1 placeholder:!text-gray2"
              id="message"
              placeholder="Message"
            />
          </div>

          <div>
            {/* <Label htmlFor="phone">Phone Number</Label> */}
            <Input
              id="hear-about-us"
              type="text"
              placeholder="How did you hear about us?"
              className="!border-primary1 placeholder:!text-gray2"
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-[11px] leading-[1.2] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to the privacy policy. I consent to the storage and use of
              my personal data for the purpose outlined in the{" "}
              <span className="text-primary1">privacy policy</span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="bg-primary1 text-primary4 px-10 py-2 border-[#FFB22C] border-[3px] rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Contact | Big Bung Media Works",
  description: "Big Bung Media Works is a digital marketing agency.",
};
