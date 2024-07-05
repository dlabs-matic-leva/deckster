"use client";

import DownloadIcon from "@/components/icons/download.svg";
import Image from "next/image";

export default function Print() {
  return (
    <button
      className="rounded-lg bg-indigo-600 px-6 py-3 text-white text-lg mb-10 print:hidden"
      onClick={() => {
        if (typeof window !== "undefined") window.print();
      }}
    >
      <div className="flex gap-2 items-start">
        <Image src={DownloadIcon} alt="Download proposal" height={24} />
        Download proposal
      </div>
    </button>
  );
}
