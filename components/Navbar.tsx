"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import CustomButton from "./CustomButton";
import { linksType } from "@/types/global";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { FaAngleDown } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const [open, toggleOpen] = useCycle(false, true);
  const [servicesOpen, setServicesOpen] = useState(false);

  const links: linksType[] = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Our Story",
      href: "/about",
    },
    {
      text: "Services",
      href: "/services",
      subLinks: [
        {
          text: "Video Production",
          href: "/services/03994ff1-e3c6-4db5-8360-682516fc5967",
        },
      ],
    },
    {
      text: "Portfolio",
      href: "/portfolio",
    },
    {
      text: "Blog",
      href: "/blog",
    },
  ];

  return (
    <nav
      className={`
      fixed top-0 left-0 w-full px-6 py-4 flex z-[50] justify-between items-center rounded-b-xl
      ${pathname === "/" ? "bg-white shadow-[0_4px_4px_0_#FFB22C80]" : "bg-bg3"}
      ${pathname.includes("studio") ? "hidden" : ""}
    `}
    >
      <div className="text-lg font-bold text-black">Logo</div>
      <div className="md:flex gap-5 xl:gap-12 hidden">
        {links.map((item: linksType, index: number) => (
          <div key={index} className="relative">
            <div
              className="flex items-center"
              onMouseEnter={() => item.subLinks && setServicesOpen(true)}
              onMouseLeave={() => item.subLinks && setServicesOpen(false)}
            >
              <Link
                href={item.href}
                className={`text-black font-medium
                  ${
                    pathname === item.href &&
                    "!text-primary1 underline underline-offset-4"
                  }
                `}
              >
                {item.text}
              </Link>
              {item.subLinks && (
                // <button
                //   onClick={() => setServicesOpen(!servicesOpen)}
                //   className="ml-2"
                // >
                //   ▼
                // </button>
                <FaAngleDown
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`ml-2 duration-500 ${servicesOpen ? "transform rotate-180" : ""}`}
                />
              )}
            </div>
            {item.subLinks && servicesOpen && (
              <div
                className="absolute top-full left-0 bg-white shadow-lg rounded-lg border overflow-hidden border-primary1"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                {item.subLinks.map((subLink, subIndex) => (
                  <Link
                    key={subIndex}
                    href={subLink.href}
                    className="block px-4 py-2 whitespace-nowrap text-black hover:bg-bg3 "
                  >
                    {subLink.text}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <CustomButton
        href="/contact"
        className="text-sm max-md:hidden"
        text={"Craft your Story"}
      />

      <motion.div
        animate={open ? "open" : "closed"}
        className="bg-white absolute z-[101] right-2 top-1 justify-center px-4 py-4 text-base rounded-lg border border-primary1 w-fit h-fit flex md:hidden flex-col items-end"
      >
        <MenuToggle toggle={() => toggleOpen()} />

        <motion.div
          variants={{
            visible: {
              opacity: 1,
              paddingTop:
                "calc(clamp(1rem, -0.1036rem + 1.7817vw, 1.5rem)*1.3)",
            },
            hidden: { opacity: 0, paddingTop: 0 },
          }}
          animate={!open ? "hidden" : "visible"}
          className="justify-start origin-[0] flex flex-col items-center"
        >
          <motion.div
            variants={{
              visible: {
                height: "auto",
                width: "85vw",
              },
              hidden: { height: 0, width: 0 },
            }}
            animate={!open ? "hidden" : "visible"}
            className="overflow-clip flex flex-col items-center"
          >
            <div className="flex flex-col items-center gap-6">
              {links.map((navItem, i) => (
                <div key={i} className="relative flex flex-col items-center">
                  <div className="flex items-center">
                    <Link
                      href={navItem.href}
                      className={`justify-center font-light flex`}
                      onClick={() =>
                        navItem.subLinks && setServicesOpen(!servicesOpen)
                      }
                    >
                      {navItem.text}
                    </Link>
                    {navItem.subLinks && (
                      <FaAngleDown
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className={`ml-2 duration-500 ${servicesOpen ? "transform rotate-180" : ""}`}
                      />
                    )}
                  </div>
                  {navItem.subLinks && servicesOpen && (
                    <div className="flex flex-col items-center mt-2">
                      {navItem.subLinks.map((subLink, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subLink.href}
                          className="block px-4 pt-3 text-black hover:bg-gray-200"
                        >
                          {subLink.text}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </nav>
  );
}
