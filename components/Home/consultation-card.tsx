import React from "react";

export default function ConsultationCard({
  index,
  heading,
  text,
}: {
  index: number;
  heading: string;
  text: string;
}) {
  return (
    <div className="h-full w-full rounded-[12px] bg-gradient-to-br from-button-secondary to-button-primary p-1">
      <div className="h-full w-full rounded-[12px] bg-white p-4 space-y-6">
        <div className="bg-gray2 rounded-full flex items-center justify-center w-10 h-10 text-white">
          {index}
        </div>
        <div className="space-y-4 px-2 md:px-4">
          <div className="font-medium text-lg">{heading}</div>
          <div className="text-sm text-gray2">{text}</div>
        </div>
      </div>
    </div>
  );
}
