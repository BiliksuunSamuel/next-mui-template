"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  useLogoIcon?: boolean;
}
export default function Logo({ useLogoIcon = false, className }: IProps) {
  return (
    <Link href="/" className="inline-flex items-center gap-2 mb-2">
      <div
        className={cn("h-8 w-30 flex items-center justify-center", className)}
      >
        <img
          alt="bd-log"
          src={useLogoIcon ? "/icon.png" : "/logo-transparent.png"}
          style={{ objectFit: "cover", width: "100%" }}
        />
      </div>
    </Link>
  );
}
