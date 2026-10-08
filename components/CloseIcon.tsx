import React from "react";

interface CloseIconProps {
  className?: string;
}

export default function CloseIcon({ className }: CloseIconProps) {
  return (
    <svg
      className={className}
      fill="none"
      strokeWidth="1.5"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      ></path>
    </svg>
  );
}
