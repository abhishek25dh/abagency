import { cn } from "@/lib/utils";
import React from "react";

const ABLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={cn("w-6 h-6", className)}
      fill="currentColor"
    >
      <path d="M14.29,82.5 L 39.58,17.5 H 51.25 V 47.97 C 65.04,46.91 75.31,53.67 75.31,65.5 C 75.31,78.33 62.33,85 51.25,85 V 82.5 Z M 51.25,60.25 V 71.37 C 56.45,70.84 59.41,68.41 59.41,65.5 C 59.41,62.59 56.45,60.25 51.25,60.25 Z" />
    </svg>
  );
};

export default ABLogo;
