// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import Image from "next/image";
// import { getHomeStorybook } from "@/app/action/home";
// import { storyBook } from "@/types/home";
// import { useScroll, useTransform, motion } from "framer-motion";
// export default function OurStorybook() {
//   const [storybook, setStoryBook] = useState<storyBook[]>([]);

//   const targetRef = useRef<HTMLDivElement | null>(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   const x = useTransform(scrollYProgress, [0, 1], ["0%", "-150%"]);
//   const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

//   useEffect(() => {
//     async function fetchStorybook() {
//       try {
//         const response = await getHomeStorybook();
//         if (response.success && Array.isArray(response.homeStorybook)) {
//           setStoryBook(response.homeStorybook);
//         } else {
//           console.error("Invalid response format:", response);
//         }
//       } catch (error) {
//         console.error("Error fetching differences:", error);
//       }
//     }

//     fetchStorybook();
//   }, []);
//   return (
//     <section ref={targetRef} className=" h-[400vh]">
//       <div className="sticky top-24 md:top-1/3 flex h-fit items-center overflow-hidden">
//         <div className="max-w-7xl mx-auto w-full px-4 overflow-x-hidden">
//           <div className="flex flex-col max-md:gap-4 md:flex-row w-full justify-between items-center">
//             <div className="text-lg md:text-2xl font-semibold leading-[1.1]">
//               Our Storybook
//             </div>
//             <div className="max-w-xs text-sm">
//               the formation of the following and have to type some description
//               about the same
//             </div>
//           </div>
//           <div className="w-full bg-button-secondary h-[18px] my-6">
//             <motion.div
//               style={{ width: width }}
//               className="relative left-0 top-0 h-full bg-button-primary"
//             ></motion.div>
//           </div>

//           <motion.div style={{ x }} className="flex gap-4">
//             {storybook.map((item, index) => (
//               <Card className="" key={index}>
//                 <CardContent className="flex border border-border3 aspect-[1.5] w-[500px] relative items-center justify-center rounded-lg !p-0 overflow-clip">
//                   <Image
//                     className="w-full h-full object-cover"
//                     height={0}
//                     width={0}
//                     sizes="100%"
//                     alt={item?.image}
//                     src={item?.image}
//                   />
//                   <div className="w-full absolute bottom-0 left-0 text-base p-2 flex justify-between items-center bg-gradient-to-r from-bg3 to-bg4">
//                     <span className="">{item?.text1}</span>
//                     <span className="text-gray2">{item?.text2}</span>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { getHomeStorybook } from "@/app/action/home";
import { storyBook } from "@/types/home";
import { useScroll, useTransform, motion } from "framer-motion";
export default function OurStorybook() {
  const [storybook, setStoryBook] = useState<storyBook[]>([]);

  const targetRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0.3, 0.65], ["0%", "-100%"]);
  const width = useTransform(scrollYProgress, [0.3, 0.65], ["0%", "100%"]);

  useEffect(() => {
    async function fetchStorybook() {
      try {
        const response = await getHomeStorybook();
        if (response.success && Array.isArray(response.homeStorybook)) {
          setStoryBook(response.homeStorybook);
        } else {
          console.error("Invalid response format:", response);
        }
      } catch (error) {
        console.error("Error fetching differences:", error);
      }
    }

    fetchStorybook();
  }, []);
  return (
    <section ref={containerRef} className="relative">
      <div
        ref={targetRef}
        className="sticky top-24 md:top-1/3 flex items-center overflow-hidden"
      >
        <div className="max-w-7xl mx-auto w-full px-4 overflow-x-hidden">
          <div className="flex flex-col max-md:gap-4 md:flex-row w-full justify-between items-center">
            <div className="text-lg md:text-2xl font-semibold leading-[1.1]">
              Our Storybook
            </div>
            <div className="max-w-xs text-sm">
              the formation of the following and have to type some description
              about the same
            </div>
          </div>
          <div className="w-full bg-button-secondary h-[18px] my-6">
            <motion.div
              style={{ width: width }}
              className="relative left-0 top-0 h-full bg-button-primary"
            ></motion.div>
          </div>

          <motion.div style={{ x }} className="flex w-fit gap-4">
            {storybook.map((item, index) => (
              <Card className="" key={index}>
                <CardContent className="flex border border-border3 aspect-[1.5] w-[500px] relative items-center justify-center rounded-lg !p-0 overflow-clip">
                  <Image
                    className="w-full h-full object-cover"
                    height={0}
                    width={0}
                    sizes="100%"
                    alt={item?.image}
                    src={item?.image}
                  />
                  <div className="w-full absolute bottom-0 left-0 text-base p-2 flex justify-between items-center bg-gradient-to-r from-bg3 to-bg4">
                    <span className="">{item?.text1}</span>
                    <span className="text-gray2">{item?.text2}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
