"use client";

import React, { ButtonHTMLAttributes } from "react";

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function MyButton({ children, ...props }: MyButtonProps) {
  const buttonClass =
    "flex justify-center items-center w-1/3 max-w-[435px] px-4 py-2 h-12 bg-black text-white rounded-lg hover:bg-gray-800 transition";

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
}
