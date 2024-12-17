import Link from "next/link";
import React from "react";

interface CustomButtonProps {
  text: string;
  className?: string;
  href: string;
}

export default function CustomButton({
  text,
  href,
  className,
}: CustomButtonProps) {
  return (
    <Link
      href={href}
      className={`
        bg-primary1 
        text-primary4 
        px-4 
        py-3 
        border-[#FFB22C] 
        border-[3px] 
        rounded-lg 
        ${className || ""}
      `}
    >
      {text}
    </Link>
  );
}
