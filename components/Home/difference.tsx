// "use client";
// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import GradientBackground from "../gradient-bg";
// import DifferenceComponent from "./difference-component";
// import CustomButton from "../CustomButton";
// import { differences } from "@/types/home";
// import { getHomeDifferences } from "@/app/action/home";

// export default function Difference() {
//   const [visibleIndex, setVisibleIndex] = useState(-1);
//   const [difference, setDifferences] = useState<differences[]>([]);

//   const handleClick = () => {
//     setVisibleIndex((prevIndex) =>
//       Math.min(prevIndex + 1, difference.length - 1)
//     );
//   };

//   useEffect(() => {
//     async function fetchDifferences() {
//       try {
//         const response = await getHomeDifferences();
//         if (response.success && Array.isArray(response.differences)) {
//           setDifferences(response.differences);
//         } else {
//           console.error("Invalid response format:", response);
//         }
//       } catch (error) {
//         console.error("Error fetching differences:", error);
//       }
//     }

//     fetchDifferences();
//   }, []);

//   return (
//     <section className="w-full flex flex-col gap-4 pt-10 relative px-4">
//       <GradientBackground />

//       <div className="max-w-8xl flex flex-col gap-6 w-full m-auto py-10">
//         <motion.div
//           initial={{ opacity: 0, y: 50, scale: 0.5 }}
//           whileInView={{ opacity: 1, y: 0, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2, duration: 0.7 }}
//           className="text-primary1 text-2xl text-center font-semibold"
//         >
//           The Big Bung Difference
//         </motion.div>
//       </div>

//       <div className="max-w-5xl w-full mx-auto relative">
//         <DifferenceComponent
//           heading={difference[0]?.heading}
//           subheading={difference[0]?.subheading}
//           text1={difference[0]?.content[0]}
//           text2={difference[0]?.content[1]}
//           image={difference[0]?.photoUrl}
//           classNameImg={difference[0]?.classNameImg}
//         />
//         {difference?.slice(1)?.map((item, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{
//               opacity: index <= visibleIndex ? 1 : 0,
//               y: index <= visibleIndex ? 0 : 50,
//             }}
//             transition={{ duration: 0.5 }}
//             onClick={handleClick}
//             className="absolute top-0 min-h-full w-full"
//             style={{ zIndex: index }}
//           >
//             <DifferenceComponent
//               heading={item?.heading}
//               subheading={item?.subheading}
//               text1={item?.content[0]}
//               text2={item?.content[1]}
//               image={item?.photoUrl}
//               classNameImg={item?.classNameImg}
//             />
//           </motion.div>
//         ))}
//       </div>

//       <CustomButton
//         text="The difference we create"
//         className="w-fit mx-auto"
//         href={"/"}
//       />
//     </section>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import StackCards from "@/components/Home/StackCards";
import { getHomeDifferences } from "@/app/action/home";
import { differences } from "@/types/home";
import DifferenceComponent from "./difference-component";
import GradientBackground from "../gradient-bg";
import CustomButton from "../CustomButton";
import { motion } from "framer-motion";

const DifferencePage = () => {
  const [difference, setDifferences] = useState<differences[]>([]);

  useEffect(() => {
    async function fetchDifferences() {
      try {
        const response = await getHomeDifferences();
        if (response.success && Array.isArray(response.differences)) {
          setDifferences(response.differences);
        } else {
          console.error("Invalid response format:", response);
        }
      } catch (error) {
        console.error("Error fetching differences:", error);
      }
    }

    fetchDifferences();
  }, []);

  return (
    <section className="w-full flex flex-col gap-4 pt-10 relative px-4">
      <GradientBackground />

      <div className="max-w-8xl flex flex-col gap-6 w-full m-auto py-10">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-primary1 text-2xl text-center font-semibold"
        >
          The Big Bung Difference
        </motion.div>
      </div>
      <div className="mx-auto max-w-8xl w-full">
        <StackCards>
          {difference.map((item, index) => (
            <DifferenceComponent
              key={index}
              heading={item?.heading}
              subheading={item?.subheading}
              text1={item?.content[0]}
              text2={item?.content[1]}
              image={item?.photoUrl}
              classNameImg={item?.classNameImg}
            />
          ))}
        </StackCards>
      </div>

      <CustomButton
        text="The difference we create"
        className="w-fit mx-auto"
        href={"/"}
      />
    </section>
  );
};

export default DifferencePage;
